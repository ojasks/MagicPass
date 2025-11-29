import React, { useState } from "react";
import { ethers } from "ethers";
import { getContract } from "./contract";

export default function Admin() {
  const [wallet, setWallet] = useState("");
  const [status, setStatus] = useState("");
  const [connected, setConnected] = useState(false);

  // CONNECT WALLET
  async function connectWallet() {
    try {
      await window.ethereum.request({ method: "eth_requestAccounts" });
      setConnected(true);
      setStatus("Wallet connected!");
    } catch (e) {
      setStatus("Connection failed: " + e.message);
    }
  }

  // MINT FUNCTION
  async function mint() {
    try {
      if (!connected) return setStatus("Please connect MetaMask first");

      setStatus("Sending transaction...");

      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();

      const contract = getContract(signer);

      const metadataURI =
        "ipfs://bafkreihgmjhofe6y3xfyz2szme3vc262xlwjctwzluibdipw7sqkerfd2e";

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

      {/* CONNECT BUTTON */}
      <button
        onClick={connectWallet}
        style={{ padding: 10, marginBottom: 20 }}
      >
        Connect MetaMask
      </button>

      <br /><br />

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
