import "./styles.css"

export function Navbar() {
  return (
    <div className="nav-container">
      <nav className="navbar">
        <ul className=" row navbar-menu">
          <li className=" navbar-item">
            <div className="navbar-logo">
              <i className="fa fa-home" /> Início
            </div>
          </li>
          <li className="col-12 col-lg-3 navbar-item">
            <div className="navbar-link">
              Clientes
            </div>
          </li>
          <li className="col-12 col-lg-3 navbar-item">
            <div className="navbar-link">
              Dívidas
            </div>
          </li>
          <li className="col-12 col-lg-3 navbar-item">
            <div className="navbar-link">
              Produtos
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
}