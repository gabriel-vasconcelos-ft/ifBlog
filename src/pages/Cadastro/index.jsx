/* eslint-disable no-unused-vars */
import "./Cadastro.css";
import React, { useState } from "react";
import axios from "axios";

function Cadastro() {
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [formValidated, setFormValidated] = useState(false);
  const [senhaError, setSenhaError] = useState("");
  const [email, setEmail] = useState("");
  const [matricula, setMatricula] = useState("");
  const [nome, setNome] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();

    if (event.currentTarget.checkValidity() === false) {
      setFormValidated(true);
      return;
    }

    if (senha !== confirmarSenha) {
      setSenhaError("A senha e a confirmação de senha não coincidem.");
      return;
    }

    setSenhaError(""); // Limpar mensagem de erro se as senhas coincidirem

    // Envie os dados do formulário
    console.log("Dados do formulário enviados");
  };

  const handleMatriculaKeyPress = (event) => {
    const pattern = /[0-9]/;
    const inputChar = String.fromCharCode(event.which);

    if (!pattern.test(inputChar)) {
      event.preventDefault();
    }
  };

  return (
    
    <div className="backgroundvisual">
      <div className="container p-5">
        <form className={`needs-validation ${formValidated ? "was-validated" : ""}`} noValidate onSubmit={handleSubmit}>
          <div className="mb-4">
            <img src="./img/logo.png" alt="" />
          </div>
          <div className="form-label">
            <h5>CADASTRO</h5>
            <small id="cadastroID" className="form-text text-muted">
              Por favor preencha os dados abaixo para realizar seu cadastro no blog
            </small>
          </div>
          <div className="form-group mb-3">
            <input type="label" 
            className="form-control" 
            id="nomeID" 
            onChange={(e)=>{setNome(e.target.value)}}
            placeholder="Nome" required />
          </div>
          <div className="form-group mb-3">
            <input
              type="text"
              className="form-control"
              id="matriculaID"
              onChange={(e)=>{setMatricula(e.target.value)}}
              placeholder="Matrícula"
              onKeyPress={handleMatriculaKeyPress}
              required
            />
          </div>
          <div className="form-group mb-3">
            <input type="email" 
            className="form-control" 
            id="emailID" 
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-mail Institucional" required />
          </div>
          <div className="form-group mb-3">
            <input
              type="password"
              className="form-control"
              id="senhaID"
              placeholder="Senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />
          </div>
          <div className="form-group mb-4">
            <input
              type="password"
              className={`form-control ${senha !== confirmarSenha ? "is-invalid" : ""}`}
              id="confID"
              placeholder="Confirmar Senha"
              value={confirmarSenha}
              onChange={(e) => setConfirmarSenha(e.target.value)}
              required
            />
            {senha !== confirmarSenha && <div className="invalid-feedback">{senhaError}</div>}
          </div>
          <div className="mb-3">
            <label className="form-label">Envie uma foto sua</label>
            <input className="form-control" type="file" id="formFile" />
          </div>
          <button type="button" className="btn btn-outline-success mb-2" onClick={(e)=> {
            let entity = {
              "nome": nome,
               "matricula": matricula,
               "email": email,
               "senha": senha
          }
            axios.post("http://localhost:8080/autor/salvar", entity).then((res) => alert(res.data.status))
          }}>
            Cadastrar
          </button>
          <div className="form-label">
            <a id="cadastroID" className="form-text text-muted" type="button">
              Ou fazer login
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Cadastro;
