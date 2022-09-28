import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="app">
      <div className="container">
        <header className="app-header">Dictionary</header>
        <main>
          {" "}
          <Dictionary />
        </main>
        <footer className="app-footer">
          Coded by{" "}
          <a
            href="https://github.com/Kumaguro3/dictionary-project-react"
            className="git-link"
          >
            Sergent Julie
          </a>
        </footer>
      </div>
    </div>
  );
}
