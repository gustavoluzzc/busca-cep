import "./styles.css";
import { useState } from "react";
import api from "./services/api";

function App() {
  
  const [input, setInput] = useState ("")
  const [cep, setCep] = useState ({})

  async function handleSearch(){
    if(input === ""){
      alert("Digite algum CEP")
      return
    }

    try {
      const response = await api.get(`${input}/json`)
      setCep(response.data)
      setInput("")
    }catch{
      alert("Oh oh! Alguma coisa deu errado.")
      setInput("")
    }
      
  }
  
  return (
    <div className="container">
      <h1 className="title">BUSCADOR DE CEP</h1>
      
      <div className="container-input">
        <input maxLength="8" type="text"
        placeholder="Digite seu CEP"
        value={input}
        onChange={(e) => setInput(e.target.value) }> 
        </input>

        <button className="button-search" onClick={handleSearch}>Buscar
        </button>
      </div> 

      {Object.keys(cep).length > 0 && (
        <main className="main">
        <h2>CEP: {cep.cep}</h2>
        
        <span>Logradouro: {cep.logradouro}</span>
        <span>Complemento: {cep.complemento}</span>
        <span>Bairro: {cep.bairro}</span>
        <span>Cidade/Estado: {cep.localidade} - {cep.uf}</span>

      </main>  
      )} 

    </div>
  )
}
export default App;
