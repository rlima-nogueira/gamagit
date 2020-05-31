import React, {useState} from 'react';
import axios from 'axios';

export default function App(props) {

  const [usuario, setUsuario] = useState('');

  function handlePesquisa(){
    axios.get(`https://api.github.com/users/${usuario}/repos`).then(response => console.log(response.data));
  }


  return (
    <>          
      <input className="usuarioInput" placeholder="Usuário"value={usuario} onChange={ e => setUsuario(e.target.value)}/>
      <button type="button" onClick={handlePesquisa}>Pesquisar</button>
    </>
  );
}




// HOOKS import React { useState } from 'react' -> é uma API para definir estados. Define uma variavel que irá se transformar em um array que pode ou não ter um retorno;

// O que são componentes, propriedades, estados, hooks, como o react funciona;

// AXIOS faz a requisição atraves do metodo GET e puxa somente o item DATA da resposta