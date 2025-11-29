// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


// import Admin from "./Admin";

// function App() {
//   return <Admin />;
// }

// export default App;

import Admin from "./Admin";
import Visitor from "./Visitor";


// function App() {
//   const path = window.location.pathname;

//   if (path === "/admin") return <Admin />;
//   if (path === "/visitor") return <Visitor />;

//   return (
//     <div style={{ padding: 20 }}>
//       <h1>MagicPass</h1>
//       <a href="/admin">Admin (Mint)</a> <br /><br />
//       <a href="/visitor">Visitor (View Pass)</a>
//     </div>
//   );
// }

// export default App;

import Scanner from "./Scanner";

function App() {
  const path = window.location.pathname;

  if (path === "/admin") return <Admin />;
  if (path === "/visitor") return <Visitor />;
  if (path === "/scan") return <Scanner />;

  return (
    <div style={{ padding: 20 }}>
      <h1>MagicPass</h1>

      <a href="/admin">Admin (Mint)</a> <br /><br />
      <a href="/visitor">Visitor (View Pass)</a> <br /><br />
      <a href="/scan">Scanner</a>
    </div>
  );
}
export default App;