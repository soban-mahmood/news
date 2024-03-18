

const Navbar = ({setCategory}) => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark" role="button" tabindex="0">
    <div className="container-fluid">
      <a className="navbar-brand" href="#"><span className="badge bg-light text-dark fs-4 ">NewsMag</span></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page"  onClick={()=>setCategory("technology")} >Technology</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" onClick={()=>setCategory("business")}>Bussines</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" onClick={()=>setCategory("health")}>Health</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page"  onClick={()=>setCategory("sports")}>Sports</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page"  onClick={()=>setCategory("entertainment")}>Entertainments</a>
          </li>
         </ul>
      </div>
    </div>
  </nav>
  )
}

export default Navbar
