import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Repositories from './pages/Repositories';
import Home from './pages/Home';


export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route patch='/' exact component = { Home } /> 
                <Route patch='/repositories' component = { Repositories } />
            </Switch>
        </BrowserRouter>
    )
}

//entender porque a rota de repositories não está funcionando. 