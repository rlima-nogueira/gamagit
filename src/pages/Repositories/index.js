import React, { useEffect, useState } from 'react';
import * as S from './styled';
import { useHistory } from 'react-router-dom';

export default function Repositories(){
    const history = useHistory();
    const [repositories, setRepositories] = useState([ ]);

    
    // busca os repositorios dentro do local store e joga dentro da variavel
    useEffect(() => { 
        let repositoriesNames = localStorage.getItem('repositoriesName');
        if (repositoriesNames !== null){
            repositoriesNames = JSON.parse(repositoriesNames);
            setRepositories(repositoriesNames);
            localStorage.clear();
        }else{
            history.push('/');
        }
    }, []);
    
    
    return(
    <S.Container>
        <S.Title>Repositórios</S.Title>
            <S.List>
            { 
                repositories.map(repository => {
                    return (
                        <S.ListItem key={repository}> Repositório:  { repository } </S.ListItem>
                    )
                })
            }       
            </S.List>
        <S.LinkHome to="/"> Voltar para ao ínicio </S.LinkHome>
    </S.Container>
    );
}