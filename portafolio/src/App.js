export default function App() {
  return (
    <div className="app">
      <Thing />
    </div>
  );
}

function Thing() {
  return (
    <header className="main">
      <div className="grid grid-cols-4">
        <h1>title</h1>
        <h1>title</h1>
        <h1>title</h1>
        <h1>title</h1>
      </div>
    </header>
  );
}
