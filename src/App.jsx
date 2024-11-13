
import './App.css'

function App() {

  const nome = "Max"

  function retornaNome() {
    return nome
  }

  return (
    <>
      <h1>Olá, {retornaNome()}</h1>
    </>
  )
}

export default App
