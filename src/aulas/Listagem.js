import React from 'react';

function Listagem(item) {
 

// <Listagem  />
/**
 * input type value onChange
 */

    return(
        <li key={item.email}>
        <span>Nome:</span> {item.nome}
        <br />
        <span>Usuário:</span> {item.usuario}
        <br />
        <span>E-mail:</span> {item.email}
        <br />        
      </li> 
   );
}

export default Listagem;