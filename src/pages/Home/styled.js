import styled from 'styled-components';

export const Container = styled.div`
    
    width: 100vw;
    heigh: 100vh;
   
    display: flex;
  
    align-items: center;
    justify-content: center;

    padding-top: 10%; 
`;


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