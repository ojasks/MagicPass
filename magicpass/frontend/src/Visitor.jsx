import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import { getContract } from "./contract";
import { QRCodeCanvas } from "qrcode.react";


export default function Visitor() {
  const [tokens, setTokens] = useState([]);
  const [addr, setAddr] = useState("");

  async function load() {
    try {
      await window.ethereum.request({ method: "eth_requestAccounts" });

      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const address = await signer.getAddress();
      setAddr(address);

      const contract = getContract(provider);

      // simple approach: check tokenIds from 1..20
      const found = [];
      for (let tokenId = 1; tokenId <= 20; tokenId++) {
        try {
          const owner = await contract.ownerOf(tokenId);
          if (owner.toLowerCase() === address.toLowerCase()) {
            found.push(tokenId);
          }
        } catch (e) {
          // token doesn't exist
        }
      }

      setTokens(found);
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    if (window.ethereum) load();
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>Visitor - Your MagicPass</h2>
      <p>Wallet: {addr}</p>

      {tokens.length === 0 && <p>No MagicPass tokens found.</p>}

      {tokens.map((t) => (
        <div key={t} style={{ margin: 20, padding: 10, border: "1px solid #ccc" }}>
          <h3>MagicPass Token #{t}</h3>
          <QRCodeCanvas value={`${addr}:${t}`} />
          <p>QR encodes: {addr}:{t}</p>
        </div>
      ))}
    </div>
  );
}
