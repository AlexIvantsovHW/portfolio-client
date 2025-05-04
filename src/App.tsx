import React, { useEffect } from "react";

import "./App.css";

function App() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log(process.env.REACT_APP_BASE_URL);
        const res = await fetch(process.env.REACT_APP_BASE_URL + "/jobs");
        const data = await res.json();
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
