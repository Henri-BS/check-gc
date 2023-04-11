import axios from "axios";
import { Navbar } from "components/Navbar";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ClientAccount, ClientPage } from "types/client";
import { DebtPage } from "types/debt";
import { PaidPage } from "types/paid";
import { ProductPage } from "types/product";
import { BASE_URL } from "utils/requests";
import "./styles.css"

function Home() {

    const [clientList, setClientList] = useState<ClientPage>({
        content: [],
        number: 0
    });

    useEffect(() => {
        axios.get(`${BASE_URL}/client/list?size=8&sort=clientId,desc`)
            .then((response) => {
                setClientList(response.data);
            });
    }, []);

    const [debtList, setDebtList] = useState<DebtPage>({
        content: [],
        number: 0
    });

    useEffect(() => {
        axios.get(`${BASE_URL}/debt/list?size=8&sort=debtId,desc`)
            .then((response) => {
                setDebtList(response.data)
            });
    }, []);

    const [paidList, setPaidList] = useState<PaidPage>({
        content: [],
        number: 0
    });

    useEffect(() => {
        axios.get(`${BASE_URL}/paid/list?size=8&sort=paidId,desc`)
            .then((response) => {
                setPaidList(response.data)
            });
    }, []);

    const [productList, setProductList] = useState<ProductPage>({
        content: [],
        number: 0
    });

    useEffect(() => {
        axios.get(`${BASE_URL}/product/list?size=8&sort=productId,desc`)
            .then((response) => {
                setProductList(response.data);
            });
    }, []);

    const [account, setAccount] = useState<ClientAccount>();

    useEffect(() => {
        axios.get(`${BASE_URL}/account/total-value`)
            .then((response) => {
                setProductList(response.data);
            });
    }, []);

    return (
        <>
            <Navbar />
            <div className="container">
                <nav className="sub-navbar">
                    <div className="sub-navbar-item">

                    </div>
                </nav>
                <div className="row">
                    <div className="col-12 col-lg-6">
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
                    </div>
                    <div className="col-12 col-lg-6">
                        <div className="home-bar-container">
                            <ul className="home-bar-title">
                                <li><i className="fa fa-cart-plus" aria-hidden="true" /> Novos Produtos</li>
                                <Link to={`/product-list}`} className="text-decoration-none">ver lista completa</Link>
                            </ul>
                            <div className="home-bar-list">
                                {productList.content.map(x => (
                                    <Link to={`/product/${x.productId}`} className="text-decoration-none">
                                    <ul className="home-bar-item">
                                        <li className="home-bar-content">Produto: {x.description}</li>
                                        <li className="home-bar-content">Preço: {x.price.toFixed(2)}</li>
                                    </ul>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6">
                        <div className="home-bar-container">
                            <ul className="home-bar-title">
                                <li><i className="fa fa-book" aria-hidden="true" /> Dívidas Pendentes </li>
                                <Link to={`/debt-list`} className="text-decoration-none">ver lista completa</Link>
                            </ul>
                            <div className="home-bar-list">
                                {debtList.content.map(x => (
                                    <Link to={`/debt/${x.debtId}`} className="text-decoration-none">
                                    <ul className="home-bar-item" >
                                        <li className="home-bar-content">Produto: {x.product} ({x.productQuantity} unidades)</li>
                                        <li className="home-bar-content">Situação: {x.status}</li>
                                    </ul>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6">
                        <div className="home-bar-container">
                            <ul className="home-bar-title">
                                <li><i className="fa fa-book" aria-hidden="true" /> Dívidas Pagas </li>
                                <Link to={`/paid-list`} className="text-decoration-none">ver lista completa</Link>
                            </ul>
                            <div className="home-bar-list">
                                {paidList.content.map(x => (
                                    <Link to={`/paid/${x.paidId}`} className="text-decoration-none">
                                    <ul className="home-bar-item" >
                                        <li className="home-bar-content">Produto: {x.productDescription} ({x.productQuantity} unidades)</li>
                                        <li className="home-bar-content">Data do Pagamento: {x.paymentDate}</li>
                                    </ul>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default Home;