import axios from "axios";
import { Navbar } from "components/Navbar";
import { useEffect, useState } from "react";
import { ClientPage } from "types/client";
import { BASE_URL } from "utils/requests";
import "./styles.css"

function Home() {
const [clientList, setClientList] = useState<ClientPage>({
    content: [],
    number: 0
});

useEffect(() => {
    axios.get(`${BASE_URL}/client/list?size=10&sort=clientId,desc`)
    .then((response) => {
        setClientList(response.data);
    });
}, [])

    return (
        <>
            <Navbar />
            <div className="container">
                
                <div className="home-bar-container">
                    <ul className="home-bar-title">
                        <li><i className="fa fa-user" /> Novos Clientes</li>
                        <li className="page-link">ver lista completa</li>
                    </ul>
                    <div className="home-bar-list">  
                    {clientList.content.map(x => (
                        <ul className="home-bar-item" key={x.clientId}>
                            <li className="home-bar-content">{x.name}</li>
                            <li className="home-bar-content">Endereço: {x.address}</li>
                        </ul>
                        ))}
                    </div>
                </div>

                <div className="home-bar-container">
                    <ul className="home-bar-title">
                        <li><i className="fa fa-book" aria-hidden="true" /> Dívidas Recentes </li>
                        <li className="page-link">ver lista completa</li>
                    </ul>
                    <div className="home-bar-list">
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
                </div>


                <div className="home-bar-container">
                    <ul className="home-bar-title">
                        <li><i className="fa fa-cart-plus" aria-hidden="true" /> Novos Produtos</li>
                        <li className="page-link">ver lista completa</li>
                    </ul>
                    <div className="home-bar-list">
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
            </div>
        </>
    )
}

export default Home;