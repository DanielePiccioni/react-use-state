import languages from "./components/languages"
import { useState } from "react";

function App() {
  const [selectedId, setSelectedId] = useState(languages[0].id);
  const selectedLanguage = languages.find(
    (linguaggio) => linguaggio.id === selectedId
  )
  return (
    <>
      <div className="app-container">
        <h1>Learn Web development</h1>
        <div className="buttons-row">
          {languages.map((linguaggio) => (
            <button key={linguaggio.id} className={"lang-button" + (linguaggio.id === selectedId ? " active" : "")} onClick={() => setSelectedId(linguaggio.id)}>
              {linguaggio.title}
            </button>
          ))}
        </div>
        <div className="card">
          <h2>{selectedLanguage.title}</h2>
          <p>{selectedLanguage.description}</p>
        </div>
      </div>
    </>
  )
}

export default App
