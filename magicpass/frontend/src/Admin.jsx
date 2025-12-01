// import React, { useState } from "react";
// import { ethers } from "ethers";
// import { getContract } from "./contract";

// export default function Admin() {
//   const [wallet, setWallet] = useState("");
//   const [status, setStatus] = useState("");
//   const [connected, setConnected] = useState(false);

//   // CONNECT WALLET
//   async function connectWallet() {
//     try {
//       await window.ethereum.request({ method: "eth_requestAccounts" });
//       setConnected(true);
//       setStatus("Wallet connected!");
//     } catch (e) {
//       setStatus("Connection failed: " + e.message);
//     }
//   }

//   // MINT FUNCTION
//   async function mint() {
//     try {
//       if (!connected) return setStatus("Please connect MetaMask first");

//       setStatus("Sending transaction...");

//       const provider = new ethers.BrowserProvider(window.ethereum);
//       const signer = await provider.getSigner();

//       const contract = getContract(signer);

//       const metadataURI =
//         "ipfs://bafkreihgmjhofe6y3xfyz2szme3vc262xlwjctwzluibdipw7sqkerfd2e";

//       const tx = await contract.issuePass(wallet, metadataURI);
//       const receipt = await tx.wait();

//       setStatus("Minted! Tx Hash: " + receipt.transactionHash);
//     } catch (e) {
//       setStatus("Error: " + e.message);
//     }
//   }

//   return (
//     <div style={{ padding: 20 }}>
//       <h2>Admin - Mint MagicPass</h2>

//       {/* CONNECT BUTTON */}
//       <button
//         onClick={connectWallet}
//         style={{ padding: 10, marginBottom: 20 }}
//       >
//         Connect MetaMask
//       </button>

//       <br /><br />

//       <input
//         placeholder="Visitor Wallet Address"
//         value={wallet}
//         onChange={(e) => setWallet(e.target.value)}
//         style={{ padding: 8, width: 300 }}
//       />

//       <br /><br />

//       <button onClick={mint} style={{ padding: 10 }}>
//         Mint Pass
//       </button>

//       <p>{status}</p>
//     </div>
//   );
// }


// import React, { useState } from "react";
// import { ethers } from "ethers";
// import { getContract } from "./contract";

// export default function Admin() {
//   const [wallet, setWallet] = useState("");
//   const [status, setStatus] = useState("");
//   const [connected, setConnected] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);

//   // CONNECT WALLET
//   async function connectWallet() {
//     try {
//       setIsLoading(true);
//       await window.ethereum.request({ method: "eth_requestAccounts" });
//       setConnected(true);
//       setStatus("Wallet connected successfully!");
//     } catch (e) {
//       setStatus("Connection failed: " + e.message);
//     } finally {
//       setIsLoading(false);
//     }
//   }

//   // MINT FUNCTION
//   async function mint() {
//     try {
//       if (!connected) return setStatus("Please connect MetaMask first");
//       if (!wallet) return setStatus("Enter visitor wallet address");

//       setIsLoading(true);
//       setStatus("Sending transaction...");

//       const provider = new ethers.BrowserProvider(window.ethereum);
//       const signer = await provider.getSigner();
//       const contract = getContract(signer);

//       const metadataURI =
//         "ipfs://bafkreihgmjhofe6y3xfyz2szme3vc262xlwjctwzluibdipw7sqkerfd2e";

//       const tx = await contract.issuePass(wallet, metadataURI);
//       const receipt = await tx.wait();

//       setStatus("MagicPass minted! Tx: " + receipt.transactionHash);
//       setWallet("");
//     } catch (e) {
//       setStatus("Error: " + e.message);
//     } finally {
//       setIsLoading(false);
//     }
//   }

//   return (
//     <div style={{ padding: 20, fontFamily: "Inter", color: "#fff",
//       background: "linear-gradient(135deg,#0c0c0c,#1a1a2e,#16213e)", minHeight: "100vh" }}>

//       <h1 style={{ fontSize: "2rem", marginBottom: "1rem",
//         background: "linear-gradient(135deg,#00d4ff,#0099ff,#0066ff)",
//         WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
//         MagicPass Admin Portal
//       </h1>

//       {/* CONNECT BUTTON */}
//       <button
//         onClick={connectWallet}
//         disabled={isLoading || connected}
//         style={{
//           padding: "12px 20px",
//           background: connected
//             ? "linear-gradient(135deg,#00ff88,#00cc66)"
//             : "linear-gradient(135deg,#00d4ff,#0099ff)",
//           border: "none",
//           color: "#fff",
//           borderRadius: 8,
//           cursor: connected ? "default" : "pointer",
//           marginBottom: 20,
//         }}
//       >
//         {isLoading ? "Connecting..." : connected ? "✓ Wallet Connected" : "Connect MetaMask"}
//       </button>

//       {/* MINT AREA */}
//       <div style={{
//         background: "rgba(255,255,255,0.05)",
//         padding: 20,
//         borderRadius: 12,
//         maxWidth: 400
//       }}>
//         <h3 style={{ marginBottom: 10 }}>Issue MagicPass</h3>

//         <input
//           placeholder="0x Visitor Wallet"
//           value={wallet}
//           onChange={(e) => setWallet(e.target.value)}
//           disabled={isLoading || !connected}
//           style={{
//             width: "100%",
//             padding: 10,
//             borderRadius: 8,
//             border: "1px solid rgba(255,255,255,0.2)",
//             background: "rgba(255,255,255,0.1)",
//             color: "#fff",
//             marginBottom: 15,
//           }}
//         />

//         <button
//           onClick={mint}
//           disabled={!connected || !wallet || isLoading}
//           style={{
//             width: "100%",
//             padding: "12px",
//             background: "linear-gradient(135deg,#0066ff,#0044cc)",
//             border: "none",
//             color: "#fff",
//             borderRadius: 8,
//             cursor: "pointer",
//           }}
//         >
//           {isLoading ? "Minting..." : "Mint MagicPass"}
//         </button>
//       </div>

//       {status && (
//         <p style={{
//           marginTop: 20,
//           background: "rgba(255,255,255,0.1)",
//           padding: 12,
//           borderRadius: 8
//         }}>
//           {status}
//         </p>
//       )}
//     </div>
//   );
// }


"use client";

import React, { useState } from "react";
import { ethers } from "ethers";
import { getContract } from "./contract";
import { Zap, Check, AlertCircle, Loader } from "lucide-react";

export default function Admin() {
  const [wallet, setWallet] = useState("");
  const [status, setStatus] = useState("");
  const [connected, setConnected] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // CONNECT WALLET
  async function connectWallet() {
    try {
      setIsLoading(true);
      await window.ethereum.request({ method: "eth_requestAccounts" });
      setConnected(true);
      setStatus("✓ Wallet connected successfully!");
    } catch (e) {
      setStatus("✗ Connection failed: " + e.message);
    } finally {
      setIsLoading(false);
    }
  }

  // MINT FUNCTION
  async function mint() {
    try {
      if (!connected) return setStatus("✗ Please connect MetaMask first");
      if (!wallet) return setStatus("✗ Enter visitor wallet address");

      setIsLoading(true);
      setStatus("⏳ Sending transaction...");

      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const contract = getContract(signer);

      const metadataURI =
        "ipfs://bafkreihgmjhofe6y3xfyz2szme3vc262xlwjctwzluibdipw7sqkerfd2e";

      const tx = await contract.issuePass(wallet, metadataURI);
      const receipt = await tx.wait();

      setStatus("✓ MagicPass minted! Tx: " + receipt.transactionHash);
      setWallet("");
    } catch (e) {
      setStatus("✗ Error: " + e.message);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-foreground">
      
      {/* Header */}
      <div className="border-b border-blue-900/30 backdrop-blur-sm sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">

          <a href="/" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition mb-4">
            ← Back to Home
          </a>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center">
              <Zap size={22} className="text-slate-950" />
            </div>
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-green-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                MagicPass Admin Portal
              </h1>
              <p className="text-sm text-blue-300/60">Secure NFT Ticket Issuance System</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Wallet Connection Card */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-slate-800/50 to-blue-900/30 border border-blue-700/40 rounded-xl p-6 backdrop-blur-sm hover:border-blue-600/60 transition">
              <h2 className="text-lg font-semibold text-blue-300 mb-4 flex items-center gap-2">
                <Zap size={18} className="text-green-400" />
                Wallet Connection
              </h2>

              <button
                onClick={connectWallet}
                disabled={isLoading || connected}
                className={`w-full py-3 px-4 rounded-lg font-semibold transition flex items-center justify-center gap-2 ${
                  connected
                    ? "bg-gradient-to-r from-green-500 to-emerald-600 text-slate-950 cursor-default"
                    : "bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:from-blue-600 hover:to-cyan-600"
                } disabled:opacity-50`}
              >
                {isLoading ? (
                  <>
                    <Loader size={18} className="animate-spin" />
                    Connecting...
                  </>
                ) : connected ? (
                  <>
                    <Check size={18} />
                    Wallet Connected
                  </>
                ) : (
                  <>
                    <Zap size={18} />
                    Connect MetaMask
                  </>
                )}
              </button>

              <div className="mt-4 p-3 bg-blue-950/30 border border-blue-700/20 rounded-lg">
                <p className="text-xs text-blue-300/60 mb-1">Status</p>
                <p className="text-sm text-blue-300 font-medium">
                  {connected ? "Ready to mint passes" : "Disconnected"}
                </p>
              </div>
            </div>
          </div>

          {/* Minting Section */}
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-br from-slate-800/50 to-blue-900/30 border border-green-600/30 rounded-xl p-8 backdrop-blur-sm">
              <h2 className="text-xl font-semibold text-green-400 mb-6 flex items-center gap-2">
                <Zap size={20} />
                Issue MagicPass
              </h2>

              <div className="space-y-6">

                {/* Wallet Input */}
                <div>
                  <label className="block text-sm font-medium text-blue-300 mb-2">Visitor Wallet Address</label>
                  <input
                    type="text"
                    placeholder="0x..."
                    value={wallet}
                    onChange={(e) => setWallet(e.target.value)}
                    disabled={isLoading || !connected}
                    className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-blue-600/40 text-white placeholder-blue-400/40 focus:outline-none focus:border-green-500/60 focus:ring-2 focus:ring-green-500/20 transition disabled:opacity-50 font-mono text-sm"
                  />
                </div>

                {/* Mint Button */}
                <button
                  onClick={mint}
                  disabled={!connected || !wallet || isLoading}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition flex items-center justify-center gap-2 ${
                    connected && wallet && !isLoading
                      ? "bg-gradient-to-r from-green-500 to-emerald-600 text-slate-950 hover:from-green-600 hover:to-emerald-700"
                      : "bg-gradient-to-r from-gray-600 to-gray-700 text-gray-300 cursor-not-allowed"
                  }`}
                >
                  {isLoading ? (
                    <>
                      <Loader size={18} className="animate-spin" />
                      Minting...
                    </>
                  ) : (
                    <>
                      <Zap size={18} />
                      Mint MagicPass NFT
                    </>
                  )}
                </button>

                {/* Info Cards */}
                <div className="grid grid-cols-2 gap-3 pt-4">
                  <div className="p-3 bg-green-900/20 border border-green-600/30 rounded-lg">
                    <p className="text-xs text-green-400/60">Network</p>
                    <p className="text-sm font-semibold text-green-400">Ethereum Mainnet</p>
                  </div>
                  <div className="p-3 bg-blue-900/20 border border-blue-600/30 rounded-lg">
                    <p className="text-xs text-blue-400/60">Type</p>
                    <p className="text-sm font-semibold text-blue-400">Soulbound NFT</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Status Banner */}
        {status && (
          <div
            className={`mt-8 p-4 rounded-lg border backdrop-blur-sm flex items-start gap-3 ${
              status.includes("✓")
                ? "bg-green-900/30 border-green-600/50"
                : status.includes("✗")
                ? "bg-red-900/30 border-red-600/50"
                : "bg-blue-900/30 border-blue-600/50"
            }`}
          >
            {status.includes("✓") ? (
              <Check size={20} className="text-green-400 mt-0.5" />
            ) : status.includes("✗") ? (
              <AlertCircle size={20} className="text-red-400 mt-0.5" />
            ) : (
              <Loader size={20} className="text-blue-400 mt-0.5 animate-spin" />
            )}

            <p
              className={`font-mono text-sm ${
                status.includes("✓")
                  ? "text-green-300"
                  : status.includes("✗")
                  ? "text-red-300"
                  : "text-blue-300"
              }`}
            >
              {status}
            </p>
          </div>
        )}

      </div>
    </div>
  );
}
