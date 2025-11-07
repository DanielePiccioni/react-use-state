import languages from "./components/languages"

function App() {
  return (
    <>
      <h1>Learn Web development</h1>
      <div>
        {languages.map((lang) => (
          <button key={lang.id}>{lang.title}</button>
        ))}
      </div>
    </>
  )
}

export default App
