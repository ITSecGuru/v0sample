import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <h1>🚀 React + Vite Deployment Test</h1>
      <p>This is a sample page to verify your deployment works.</p>

      <button onClick={() => setCount(count + 1)}>
        You clicked {count} times
      </button>

      <p style={{ marginTop: "20px" }}>
        Edit <code>src/App.jsx</code> and save to see updates.
      </p>
    </div>
  );
}

export default App;
