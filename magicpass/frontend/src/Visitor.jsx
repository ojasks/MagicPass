// import React, { useState, useEffect } from "react";
// import { ethers } from "ethers";
// import { getContract } from "./contract";
// import { QRCodeCanvas } from "qrcode.react";


// export default function Visitor() {
//   const [tokens, setTokens] = useState([]);
//   const [addr, setAddr] = useState("");

//   async function load() {
//     try {
//       await window.ethereum.request({ method: "eth_requestAccounts" });

//       const provider = new ethers.BrowserProvider(window.ethereum);
//       const signer = await provider.getSigner();
//       const address = await signer.getAddress();
//       setAddr(address);

//       const contract = getContract(provider);

//       // simple approach: check tokenIds from 1..20
//       const found = [];
//       for (let tokenId = 1; tokenId <= 20; tokenId++) {
//         try {
//           const owner = await contract.ownerOf(tokenId);
//           if (owner.toLowerCase() === address.toLowerCase()) {
//             found.push(tokenId);
//           }
//         } catch (e) {
//           // token doesn't exist
//         }
//       }

//       setTokens(found);
//     } catch (e) {
//       console.error(e);
//     }
//   }

//   useEffect(() => {
//     if (window.ethereum) load();
//   }, []);

//   return (
//     <div style={{ padding: 20 }}>
//       <h2>Visitor - Your MagicPass</h2>
//       <p>Wallet: {addr}</p>

//       {tokens.length === 0 && <p>No MagicPass tokens found.</p>}

//       {tokens.map((t) => (
//         <div key={t} style={{ margin: 20, padding: 10, border: "1px solid #ccc" }}>
//           <h3>MagicPass Token #{t}</h3>
//           <QRCodeCanvas value={`${addr}:${t}`} />
//           <p>QR encodes: {addr}:{t}</p>
//         </div>
//       ))}
//     </div>
//   );
// }



import React, { useState } from "react";
import { ethers } from "ethers";
import { getContract } from "./contract";

export default function Visitor() {
  const [code, setCode] = useState("");
  const [status, setStatus] = useState("");
  const [image, setImage] = useState("");

  async function lookup() {
    try {
      setStatus("Reading pass...");

      const provider = new ethers.BrowserProvider(window.ethereum);
      const contract = getContract(provider);

      const [address, tokenId] = code.split(":");

      // 1. Check owner
      const owner = await contract.ownerOf(tokenId);

      if (owner.toLowerCase() !== address.toLowerCase()) {
        setStatus("❌ Invalid pass");
        return;
      }

      // 2. Load metadata URI
      const uri = await contract.tokenURI(tokenId);
      console.log("Metadata URI:", uri);

      // Convert IPFS → HTTPS
      const httpsURL = uri.replace("ipfs://", "https://ipfs.io/ipfs/");
      const metadata = await fetch(httpsURL).then(r => r.json());

      // 3. Get image
      const img = metadata.image.replace("ipfs://", "https://ipfs.io/ipfs/");
      setImage(img);

      setStatus("✅ Pass verified!");
    } catch (err) {
      setStatus("Error: " + err.message);
    }
  }

  return (
    <div style={{ padding: 20 }}>
      <h2>Visitor - View MagicPass</h2>

      <input
        placeholder="Paste QR scan output"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        style={{ width: 300, padding: 8 }}
      />

      <br /><br />

      <button onClick={lookup}>Verify Pass</button>

      <p>{status}</p>

      {image && (
        <img src={image} alt="MagicPass NFT" width={250} style={{ marginTop: 20 }} />
      )}
    </div>
  );
}
