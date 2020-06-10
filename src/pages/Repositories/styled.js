import styled from 'styled-components';
import {Link } from 'react-router-dom';


export const Title = styled.h1`
    text-align: center;
    font-size: 2rem;
    font-family: sans-serif;
    color: #333;
`;

export const List = styled.ul`
    list-style: none;
    padding: 0;
    font-family: sans serif; 
`;

export const ListItem = styled.li`  
    margin: .6rem auto;
    background: #000;
    color: #ffff;
    padding: .8rem; 
    font-family: sans-serif;
    width: 100%;
`; 


export const LinkHome = styled(Link)`
    display: flex;
    color: #fff;
    width: 50%;
    font-family sans-serif;
    margin-left: 245px;
    align-items: center;
    text-align: center;
    justify-content: center;
    background-color: #000; 
    padding: .8rem;
    text-decoration: none; 
    cursor: pointer;
`;

export const Container = styled.div`
    width: 100%;
    max-width: 991px;
    margin: 0 auto;    
    
`; 