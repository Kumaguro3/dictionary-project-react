import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="app-header">Header to be included here</header>
        <main>
          {" "}
          <Dictionary />
        </main>
        <footer className="app-footer">Coded by Sergent Julie</footer>
      </div>
    </div>
  );
}
