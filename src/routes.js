import React from 'react';
import {Switch, Route } from 'react-router-dom'
import Cadastro from './components/Cadastro';
import Listagem from './components/Listagem';

export default function Routes() {

    return (
        //Switch permite que apenas uma rota seja chamada por vez
        //Route => path: Rota do meu componente; component
<Switch>
    <Route path="/Cadastro" 
    component={Cadastro} />
    <Route path="/listagem" 
    component={Listagem} />
    
</Switch>

    )
}