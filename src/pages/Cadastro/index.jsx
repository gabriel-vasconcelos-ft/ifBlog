import "./Cadastro.css"

function cadastro() {
    return (

<div className="backgroundvisual">
  <div className="container w-25 p-5">
  <form>

    <div className="mb-4">
      <img src="./img/logo.png" alt=""></img>
    </div>

  <div className="form-label">
    <h5>CADASTRO</h5>
    <small id="cadastroID" className="form-text text-muted"> Por favor preencha o dados abaixo para realizar seu cadastro no blog</small>
  </div>

  <div className="form-group mb-3 ">
    <input type="label" className="form-control" id="nomeID" aria-describedby="emailHelp" placeholder="Nome"></input>
  </div>
  <div className="form-group mb-3 ">
    <input type="number" className="form-control" id="matriculaID" aria-describedby="emailHelp" placeholder="Matrícula"></input>
  </div>
  <div className="form-group mb-3 ">
    <input type="email" className="form-control" id="emailID" aria-describedby="emailHelp" placeholder="E-mail Institucional"></input>
  </div>
  <div className="form-group mb-3 ">
    <input type="password" className="form-control" id="senhaID" placeholder="Senha"></input>
  </div>
  <div className="form-group mb-4 ">
    <input type="password" className="form-control" id="confID" placeholder="Confirmar Senha"></input>
  </div>
  
  <div className="custom-file mb-4">
    <input type="file" className="custom-file-input" id="customFile"></input>
  </div>

  <button type="submit" className="btn btn-outline-success">Cadastrar</button>
    </form>
    </div>
  </div>


    )
  }
  
  export default cadastro
  
