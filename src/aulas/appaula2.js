import React, {useState, useEffect} from 'react';


function App() {
  //const / let
  //hooks 
  //estado / state


  //useState
  // 0 => Valor Inicial do estado
  // 1 => setador

  const [aluno, setAluno] = useState('Rui Renan');
  const alunos = [
    {id: 1, nome: 'Rui'},
    {id: 2, nome: 'Edna'},
    {id: 3, nome: 'Vinicius'},
    {id: 4, nome: 'Carlos'}

  ];

  //for Each map
  //id 

  useEffect(() => {

    //alterarNomeAluno();

    function alterarNomeAluno(){
      setAluno("Alunos do Senac");
    }


  }, [aluno]);

 
  function handleButton(){
    setAluno("Renato");
    //imutável
  
  }
 
  return(
  //fragments
  <>
       <h1>Hello World</h1> 
       <h3>Seja Bem Vindo(a) {aluno}!</h3>
        Nome do Aluno
       <input type="text" onChange={(e) => 
        setAluno(e.target.value)} />
      <br/>  <br/>  

       <button onClick={handleButton}>Mudar Nome</button>
<hr />
<h1>Inserção de Objetos</h1>
{alunos.map((aluno) => (
  <li key={aluno.id}>
    O aluno {aluno.id} é o {aluno.nome}
  </li>

))}

    </>
  );
  
}

export default App;

