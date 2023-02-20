import Dictionary from "./Dictionary";
import "./App.css";
function App() {
  return (
    <div className="App">
      <Dictionary defaultKeyword="celebrate" />
      <small>
        <a
          href="https://github.com/Heangt/dictionary-react"
          target="_blank"
          rel="noreferrer"
        >
          Open-source code
        </a>
        {""} by Heang Araya
      </small>
    </div>
  );
}

export default App;
