import React, {useState} from 'react';
import axios from 'axios';
import * as S from './styled';
import { useHistory } from 'react-router-dom';


export default function App(props) {
  const history = useHistory();
  const [usuario, setUsuario] = useState('');

  // busca os dados dentro da api do github
  function handlePesquisa(){
    axios.get(`https://api.github.com/users/${usuario}/repos`).then(response => {
      console.log(response.data)
      
    const repositories = response.data;
    const repositoriesName =[];
  
  // entender mais como funciona o map
    repositories.map((repository)=>{
      // adiciona os repositorios ao array "repositoriesName"
      return repositoriesName.push(repository.name);
      history.push('/repositories');
    });

    //Guarda os repositórios por nome no local storage
    localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName));

    
  });

  }


  return (
    <S.Container>        
      <S.Input className="usuarioInput" placeholder="Digite o nome do usuário no Github"value={usuario} onChange={ e => setUsuario(e.target.value)}/>

      <S.Button type="button" onClick={handlePesquisa}>Pesquisar</S.Button>
    </S.Container>
  );
}




// HOOKS import React { useState } from 'react' -> é uma API para definir estados. Define uma variavel que irá se transformar em um array que pode ou não ter um retorno;

// O que são componentes, propriedades, estados, hooks, como o react funciona;

// AXIOS faz a requisição atraves do metodo GET e puxa somente o item DATA da resposta