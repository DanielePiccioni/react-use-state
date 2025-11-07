import languages from "./components/languages"
import { useState } from "react";

function App() {
  const [selectedId, setSelectedId] = useState(languages[0].id);
  const selectedLanguage = languages.find((linguaggio) => linguaggio.id === selectedId);
  return (
    <>
      <h1>Learn Web development</h1>
      <div>
        {languages.map((linguaggio) => (
          <button key={linguaggio.id} onClick={() => setSelectedId(linguaggio.id)}>
            {linguaggio.title}
          </button>
        ))}
      </div>
      <div>
        <h2>{selectedLanguage.title}</h2>
        <p>{selectedLanguage.description}</p>
      </div>
    </>
  )
}

export default App
