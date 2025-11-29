import React, { useState } from "react";
import { QrReader } from "react-qr-reader";
import { ethers } from "ethers";
import { getContract } from "./contract";

export default function Scanner() {
  const [result, setResult] = useState("");
  const [status, setStatus] = useState("");

  async function verify(decoded) {
    try {
      setStatus("Checking on-chain…");

      // decoded format: address:tokenId
      const [address, tokenId] = decoded.split(":");
      if (!address || !tokenId) {
        return setStatus("Invalid QR format");
      }

      const provider = new ethers.BrowserProvider(window.ethereum);
      const contract = getContract(provider);

      const owner = await contract.ownerOf(tokenId.trim());

      if (owner.toLowerCase() === address.toLowerCase()) {
        setStatus("✅ VALID PASS");
      } else {
        setStatus("❌ INVALID PASS (owner mismatch)");
      }
    } catch (err) {
      setStatus("❌ Invalid or expired pass");
    }
  }

  return (
    <div style={{ padding: 20 }}>
      <h2>Scan MagicPass</h2>

      <QrReader
        onResult={(res) => {
          if (res?.text) {
            setResult(res.text);
            verify(res.text);
          }
        }}
        constraints={{ facingMode: "environment" }}
        style={{ width: "300px" }}
      />

      <p>Scanned: {result}</p>
      <h3>{status}</h3>
    </div>
  );
}
