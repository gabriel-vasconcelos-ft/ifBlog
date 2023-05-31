/* eslint-disable no-unused-vars */
import "./Login.css"

function login() {

  (function() {
    'use strict';
    window.addEventListener('load', function() {
      var forms = document.getElementsByClassName('needs-validation');
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })();
  
  return (

<div className="backgroundvisual">
  <div className="container p-5">
  <form className="needs-validation" noValidate>

    <div className="mb-4">
      <img src="./img/logo.png" alt=""></img>
    </div>

  <div className="form-label">
    <h5>LOGIN</h5>
    <label id="cadastroID" className="form-text text-muted"> Por favor, informe suas credenciais abaixo para realizar seu login no blog</label>
  </div>

  <div className="form-group mb-3">
    <input type="label" className="form-control" id="matriculaID" aria-describedby="emailHelp" placeholder="Matrícula" required></input>
  </div>

  <div className="form-group mb-3">
    <input type="password" className="form-control" id="senhaID" placeholder="Senha" required></input>
    <div className="invalid-feedback">
      Por favor, preencha todos os campos.
      </div>
  </div>

  <button type="submit" className="btn btn-outline-success mb-2">Entrar</button>

  <div className="form-label">
    <label id="cadastroID" className="form-text text-muted" type="submit"> Ou cadastra-se</label>
  </div>

    </form>
    </div>
  </div>


    )
  }
  
  export default login
  
