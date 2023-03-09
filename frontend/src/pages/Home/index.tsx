import axios from "axios";
import { Navbar } from "components/Navbar";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ClientPage } from "types/client";
import { DebtPage } from "types/debt";
import { ProductPage } from "types/product";
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
    }, []);

    const [debtList, setDebtList] = useState<DebtPage>({
        content: [],
        number: 0
    });

    useEffect(() => {
        axios.get(`${BASE_URL}/debt/list?size=10&sort=debtId,desc`)
            .then((response) => {
                setDebtList(response.data)
            });
    }, []);

    const [productList, setProductList] = useState<ProductPage>({
        content: [],
        number: 0
    });

    useEffect(() => {
        axios.get(`${BASE_URL}/product/list?size=10&sort=productId,desc`)
            .then((response) => {
                setProductList(response.data);
            });
    }, []);

    return (
        <>
            <Navbar />
            <div className="container">

                <div className="home-bar-container">
                    <ul className="home-bar-title">
                        <li><i className="fa fa-user" /> Novos Clientes</li>
                        <Link to={`/client-list`}><li>ver lista completa</li></Link>
                    </ul>
                    <div className="home-bar-list">
                        {clientList.content.map(x => (
                            <Link to={`/client/${x.clientId}`} className="text-decoration-none"> 
                            <ul className="home-bar-item" key={x.clientId}>
                                <li className="home-bar-content">{x.name}</li>
                                <li className="home-bar-content">Endereço: {x.address}</li>
                                </ul>
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="home-bar-container">
                    <ul className="home-bar-title">
                        <li><i className="fa fa-book" aria-hidden="true" /> Dívidas Recentes </li>
                        <li className="page-link">ver lista completa</li>
                    </ul>
                    
                        <div className="home-bar-list">
                        {debtList.content.map(x => (
                            <ul className="home-bar-item" >
                                <li className="home-bar-content">Produto: {x.product} ({x.productQuantity} unidades)</li>
                                <li className="home-bar-content">Situação: {x.status}</li>
                            </ul> 
                            ))}
                        </div>
                   
                </div>


                <div className="home-bar-container">
                    <ul className="home-bar-title">
                        <li><i className="fa fa-cart-plus" aria-hidden="true" /> Novos Produtos</li>
                        <li className="page-link">ver lista completa</li>
                    </ul>
                    <div className="home-bar-list">
                    {productList.content.map(x => (
                        <ul className="home-bar-item">
                            <li className="home-bar-content">Produto: {x.description}</li>
                            <li className="home-bar-content">Preço: {x.price.toFixed(2)}</li>
                        </ul>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;