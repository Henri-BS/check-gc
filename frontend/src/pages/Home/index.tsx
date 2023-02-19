import { Navbar } from "components/Navbar";
import "./styles.css"

function Home() {
    return (
        <>
            <Navbar />
            <div className="container">
                <div className="home-bar-container">
                    <ul className="home-bar-title">
                        <li><i className="fa fa-user" /> Novos Clientes</li>
                        <li className="page-link">ver lista completa</li>
                    </ul>
                    <ul className="home-bar-item">
                        <li className="home-bar-content">Jack</li>
                        <li className="home-bar-content">Endereço: Bairro Jardim, Rua 22 - 3131</li>
                    </ul>
                    <ul className="home-bar-item">
                        <li className="home-bar-content">Lucy</li>
                        <li className="home-bar-content">Endereço: Bairro Jardim, Rua 22 - 3131</li>
                    </ul>
                    <ul className="home-bar-item">
                        <li className="home-bar-content">Apollo</li>
                        <li className="home-bar-content">Endereço: Bairro Jardim, Rua 22 - 3131</li>
                    </ul>
                    <ul className="home-bar-item">
                        <li className="home-bar-content">Helena</li>
                        <li className="home-bar-content">Endereço: Bairro Jardim, Rua 22 - 3131</li>
                    </ul>
                    <ul className="home-bar-item">
                        <li className="home-bar-content">Nick</li>
                        <li className="home-bar-content">Endereço: Bairro Jardim, Rua 22 - 3131</li>
                    </ul>
                </div>

                <div className="home-bar-container">
                    <ul className="home-bar-title">
                        <li><i className="fa fa-book" aria-hidden="true" /> Dívidas Recentes </li>
                        <li className="page-link">ver lista completa</li>
                    </ul>
                    <ul className="home-bar-item">
                        <li className="home-bar-content">Produto: </li>
                        <li className="home-bar-content">Cliente: </li>
                    </ul>
                    <ul className="home-bar-item">
                        <li className="home-bar-content">Produto: </li>
                        <li className="home-bar-content">Cliente: </li>
                    </ul>
                    <ul className="home-bar-item">
                        <li className="home-bar-content">Produto: </li>
                        <li className="home-bar-content">Cliente: </li>
                    </ul>
                    <ul className="home-bar-item">
                        <li className="home-bar-content">Produto: </li>
                        <li className="home-bar-content">Cliente: </li>
                    </ul>
                    <ul className="home-bar-item">
                        <li className="home-bar-content">Produto: </li>
                        <li className="home-bar-content">Cliente: </li>
                    </ul>
                </div>


                <div className="home-bar-container">
                    <ul className="home-bar-title">
                        <li><i className="fa fa-cart-plus" aria-hidden="true" /> Novos Produtos</li>
                        <li className="page-link">ver lista completa</li>
                    </ul>
                    <ul className="home-bar-item">
                        <li className="home-bar-content">Produto: </li>
                        <li className="home-bar-content">Preço: </li>
                    </ul>
                    <ul className="home-bar-item">
                        <li className="home-bar-content">Produto: </li>
                        <li className="home-bar-content">Preço: </li>
                    </ul>
                    <ul className="home-bar-item">
                        <li className="home-bar-content">Produto: </li>
                        <li className="home-bar-content">Preço: </li>
                    </ul>
                    <ul className="home-bar-item">
                        <li className="home-bar-content">Produto: </li>
                        <li className="home-bar-content">Preço: </li>
                    </ul>
                    <ul className="home-bar-item">
                        <li className="home-bar-content">Produto: </li>
                        <li className="home-bar-content">Preço: </li>
                    </ul>
                </div>

            </div>
        </>
    )
}

export default Home;