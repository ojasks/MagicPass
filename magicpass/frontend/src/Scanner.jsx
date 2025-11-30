// import React, { useState } from "react";
// import { QrReader } from "react-qr-reader";
// import { ethers } from "ethers";
// import { getContract } from "./contract";

// export default function Scanner() {
//   const [result, setResult] = useState("");
//   const [status, setStatus] = useState("");
//   async function verify(decoded) {
//     try {
//       setStatus("Checking on-chain…");

//       // decoded format: address:tokenId
//       const [address, tokenId] = decoded.split(":");
//       if (!address || !tokenId) {
//         return setStatus("Invalid QR format");
//       }

//       const provider = new ethers.BrowserProvider(window.ethereum);
//       const contract = getContract(provider);

//       const owner = await contract.ownerOf(tokenId.trim());

//       if (owner.toLowerCase() === address.toLowerCase()) {
//         setStatus("✅ VALID PASS");
//       } else {
//         setStatus("❌ INVALID PASS (owner mismatch)");
//       }
//     } catch (err) {
//       setStatus("❌ Invalid or expired pass");
//     }
//   }

//   return (
//     <div style={{ padding: 20 }}>
//       <h2>Scan MagicPass</h2>

//       <QrReader
//         onResult={(res) => {
//           if (res?.text) {
//             setResult(res.text);
//             verify(res.text);
//           }
//         }}
//         constraints={{ facingMode: "environment" }}
//         style={{ width: "300px" }}
//       />

//       <p>Scanned: {result}</p>
//       <h3>{status}</h3>
//     </div>
//   );
// }



import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import { getContract } from "./contract";
import { QrReader } from "react-qr-reader";

export default function Scanner() {
  const [result, setResult] = useState("");
  const [status, setStatus] = useState("");
  const [events, setEvents] = useState([]);

  useEffect(() => {
    async function loadEvents() {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const contract = getContract(provider);

      const filter = contract.filters.PassScanned();
      const logs = await contract.queryFilter(filter);

      const parsed = logs
        .map((log) => {
          return {
            user: log.args.user,
            tokenId: Number(log.args.tokenId),
            time: new Date(Number(log.args.time) * 1000).toLocaleString(),
          };
        })
        .reverse();

      setEvents(parsed);
    }

    loadEvents();
  }, []);

  async function handleScan(data) {
    if (!data) return;
    if (data === result) return;

    setResult(data);

    // QR format is: address:tokenId
    const [user, tokenId] = data.split(":");
    setStatus(`Scanned pass of user ${user}, token ${tokenId}`);

    try {
      await window.ethereum.request({ method: "eth_requestAccounts" });
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const contract = getContract(signer);

      const tx = await contract.logScan(user, Number(tokenId));
      await tx.wait();

      setStatus("✔ Pass Verified & Logged Successfully");

      // reload events after log
      const filter = contract.filters.PassScanned();
      const logs = await contract.queryFilter(filter);

      const parsed = logs
        .map((log) => ({
          user: log.args.user,
          tokenId: Number(log.args.tokenId),
          time: new Date(Number(log.args.time) * 1000).toLocaleString(),
        }))
        .reverse();

      setEvents(parsed);
    } catch (e) {
      setStatus("❌ Invalid Pass: " + e.reason);
    }
  }

  return (
    <div style={{ padding: 20 }}>
      <h2>Scanner</h2>

      <QrReader
        onResult={(r) => handleScan(r?.text)}
        constraints={{ facingMode: "environment" }}
        style={{ width: "300px" }}
      />

      <p>{status}</p>

      <h3>Scan History</h3>

      {events.map((e, i) => (
        <div key={i} style={{ border: "1px solid #444", padding: 10, marginBottom: 10 }}>
          <p>User: {e.user}</p>
          <p>Token: {e.tokenId}</p>
          <p>Time: {e.time}</p>
        </div>
      ))}
    </div>
  );
}
