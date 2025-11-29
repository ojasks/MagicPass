import React, { useState } from "react";
import { ethers } from "ethers";
import { getContract } from "./contract";

export default function Admin() {
  const [wallet, setWallet] = useState("");
  const [status, setStatus] = useState("");

  async function mint() {
    try {
      setStatus("Sending transaction...");
      await window.ethereum.request({ method: "eth_requestAccounts" });
      
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
      const contract = getContract(signer);

      const metadataURI = "ipfs://bafkreihgmjhofe6y3xfyz2szme3vc262xlwjctwzluibdipw7sqkerfd2e";

      const tx = await contract.issuePass(wallet, metadataURI);
      const receipt = await tx.wait();
      setStatus("Minted! Tx Hash: " + receipt.transactionHash);
    } catch (e) {
      setStatus("Error: " + e.message);
    }
  }

  return (
    <div style={{ padding: 20 }}>
      <h2>Admin - Mint MagicPass</h2>

      <input
        placeholder="Visitor Wallet Address"
        value={wallet}
        onChange={(e) => setWallet(e.target.value)}
        style={{ padding: 8, width: 300 }}
      />

      <br /><br />

      <button onClick={mint} style={{ padding: 10 }}>
        Mint Pass
      </button>

      <p>{status}</p>
    </div>
  );
}
