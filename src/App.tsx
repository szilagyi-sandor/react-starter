import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div id="app">
      <h1>Vite + React</h1>

      <button
        type="button"
        onClick={() => setCount((prevCount) => prevCount + 1)}
      >
        count is {count}
      </button>
    </div>
  );
}

export default App;
