import React, { useState, useEffect } from "react";

import{ BrowserRouter} from 'react-router-dom';

import Listagem from "./components/Listagem";

import Router from '../routes';

import "./app.css";

function App() {
  const valorInicial = {
    nome: "",
    email: "",
    usuario: "",
  };
  const [aluno, setAluno] = useState(valorInicial);
  const [alunos, setAlunos] = useState([]);

  useEffect(() => {
    // populaAluno();

    function populaAluno() {
      setAluno({
        nome: "Daniele",
        usuario: "daniele",
        email: "dani.leao89@gmail.com",
      });
    }
  }, []);

  //map => recebe um array, transforma esse array, ele retorna um novo array
  // const alunos = [
  //   {id: 1, nome: 'Jose'},
  //   {id: 2, nome: 'Manuel'}
  // ];

  // // O aluno 1 tem o nome Jose
  // alunos.map(aluno => {
  //   // return "O aluno " + aluno.id + " tem o nome " + aluno.nome
  //   return `O aluno ${aluno.id} tem o nome ${aluno.nome}`
  // })
  // console.log(alunos)

  /* 
  Filter 

  */

  //  const alunosMapp = [
  //      {id: 1, nome: 'Jose'},
  //      {id: 2, nome: 'Manuel'}
  //    ];

  //    alunosMapp.filter(aluno => )

  function handleCadastrar(e) {
    e.preventDefault();
    // console.log(aluno);
    const alunosMap = [...alunos, aluno];
    setAlunos(alunosMap);

    // Limpar variavel aluno

    setAluno(valorInicial);
  }

  function handleChange(event) {
    setAluno({
      ...aluno,
      [event.target.name]: event.target.value,
    });
  }

  function editarAluno(aluno) {
    setAluno({
    ...aluno,
    isEdit: true,
  });
}

  function editarNovoAluno(aluno) {
    console.log(aluno);
    let novoArrayAlunos = alunos;
    const indexAluno = novoArrayAlunos.findIndex(
      (a) => a.email === aluno.email );

    alunos[indexAluno]=aluno;
    setAluno([...alunos]);
    // setAluno(valorInicial); => Promisse
    
   
    novoArrayAlunos[indexAluno] = aluno;
    console.log([...novoArrayAlunos]);
    setAlunos([...novoArrayAlunos]);
  }

  return (
    <BrowserRouter>
      <form className="formulario" onSubmit={handleCadastrar}>
        <h3>Cadastro de Aluno</h3>
        <div className="row">
          <span>Nome</span>
          <input
            type="text"
            name="nome"
            value={aluno.nome}
            onChange={handleChange}
          />
        </div>

        <div className="row">
          <span>Usuário</span>
          <input
            type="text"
            name="usuario"
            value={aluno.usuario}
            onChange={handleChange}
          />
        </div>

        <div className="row">
          <span>E-mail</span>
          <input
            type="text"
            name="email"
            readOnly={aluno.isEdit}
            value={aluno.email}
            onChange={handleChange}
          />
        </div>

        {!aluno.isEdit && <h3>Esse aluno está sendo cadastrado</h3>}


        <div className="row">
          {!aluno.isEdit === true ? (
          <button>Cadastrar </button>
          ):(
          <button type="button" onClick={editarNovoAluno}> 
          Editar 
          </button>
          )}
        </div>
      </form>

      <hr />
      <h2>Listagem de alunos</h2>

      <ul>
        {alunos.map((aluno) => (

          <div key={aluno.email}>
              <Listagem item={aluno} />

         <button onClick={() => editarAluno(aluno)}>Editar Aluno</button>
         </div>
        ))}
      </ul>
      <Router />
      </BrowserRouter>
    );
}

export default App;