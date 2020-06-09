import React, { useEffect, useState } from 'react';
import * as S from './styled';


export default function Repositories(){

    const [repositories, setRepositories] = useState([ ]);

    
    // busca os repositorios dentro do local store e joga dentro da variavel
    useEffect(() => { 
        let repositoriesNames = localStorage.getItem('repositoriesName');
        repositoriesNames = JSON.parse(repositoriesNames);
        setRepositories(repositoriesNames);
        // localStorage.clear();
    }, []);
    
    
    return(
    <S.Container>
        <S.Title>Repositórios</S.Title>
            <S.List>
            { 
                repositories.map(repository => {
                    return (
                        <S.ListItem> Repositório:  { repository } </S.ListItem>
                    )
                })
            }       
            </S.List>
    </S.Container>
    );
}