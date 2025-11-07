import languages from "./components/languages"

function App() {
  const firstLinguaggio = languages[0];
  return (
    <>
      <h1>Learn Web development</h1>
      <div>
        {languages.map((lang) => (
          <button key={lang.id}>{lang.title}</button>
        ))}
      </div>
      <div>
        <h2>{firstLinguaggio.title}</h2>
        <p>{firstLinguaggio.description}</p>
      </div>
    </>
  )
}

export default App
