import styled from 'styled-components';


export const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    heigh: 100vh;

`

export const Content = styled.div`
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 2rem; 
   
`;

export const Cabecalho = styled.div`
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 10%; 
    font-family: sans-serif;
    font-size: 3rem;
    font-weight: 600;
    color: #4B0082;
` 


export const Input = styled.input`
    border: 1px solid #ddd;
    width: 35vw;
    height: 2rem; 
    border-radius: .25rem 0 0 .25rem;
    padding: 0 .5rem;
   

    &:focus,
    &:active{
        outline: none;
        box-shadow: none; 
    }
`; 

export const ErrorMsg = styled.span`
    display: block;
    color: red; 
    font-size: 0.9rem;
    font-weight: 600;
    margin-top: 1rem;
    font-family: sans-serif;
` 

export const Button = styled.button`
    height: 2rem;
    border: 0;
    background: #000;
    font-weight: 500;
    color: #fff;
    border-radius: 0 .25rem .25rem 0; 

    cursor: pointer;

    &:focus,
    &:active{
        outline: none;
        box-shadow: none; 
    }
`;