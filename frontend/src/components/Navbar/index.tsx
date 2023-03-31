import { Link } from "react-router-dom";
import "./styles.css"

export function Navbar() {
  return (
    <div className="nav-container">
      <nav className="navbar">
        <ul className=" row navbar-menu">
          <li className=" navbar-item">
            <Link to={`/`} className="navbar-link">
              <i className="fa fa-home" /> Início
            </Link>
          </li>

          <li className="col-12 col-lg-2 navbar-item ">
            <Link to={`/client-list`} className="navbar-link">
              Clientes
            </Link>
          </li>

          <li className="col-12 col-lg-2 navbar-item">
              <Link to={`/debt-list`} className="navbar-link">
                Devendo
              </Link>
          </li>

          <li className="col-12 col-md-6 col-lg-2 navbar-item">
              <Link to={`/paid-list`} className="navbar-link">
                Pago
              </Link>
          </li>
          <li className="col-12 col-md-6 col-lg-2 navbar-item">
            <Link to={`/product-list`} className="navbar-link">
              Produtos
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}