import axios from "axios";
import { Navbar } from "components/Navbar";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AccountTotalValues, ClientPage } from "types/client";
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

    const [value, setValue] = useState<AccountTotalValues>();
    useEffect(() => {
        axios.get(`${BASE_URL}/account/total-value`)
            .then((response) => {
                setValue(response.data);
            })
    }, []);

    return (
        <>
            <Navbar />
            <nav className="bar-container row">
                    <div className="bar-item col-6">
                        <b>Valor das Dívidas Pendentes:</b> {value?.debtAmount.toFixed(2)}
                    </div>
                    <div className="bar-item col-6">
                        <b>Valor das Dívidas Paga:</b> {value?.paidAmount.toFixed(2)}
                    </div>
                    <div className="bar-item col-6">
                        <b>Quantidade de Dívidas Pendentes:</b> {value?.debtQuantity}
                    </div>  <div className="bar-item col-6">
                        <b>Quantidade de Dívidas Pagas:</b> {value?.paidQuantity}
                    </div>
                    <div className="bar-item col-6">
                        <b>Maior Dívida Pendente:</b> {value?.debtMaxValue.toFixed(2)}
                    </div>
                    <div className="bar-item col-6">
                        <b>Maior Dívida Paga:</b> {value?.paidMaxValue.toFixed(2)}
                    </div>
                </nav>
            <div className="container">
                
                <div className="row">
                    <div className="col-12 col-lg-6">
                        <div className="homelist-container">
                            <ul className="homelist-title">
                                <li><i className="fa fa-user" /> Novos Clientes</li>
                                <Link to={`/client-list`}><li>ver lista completa</li></Link>
                            </ul>
                            <div>
                                {clientList.content.map(x => (
                                    <Link to={`/client/${x.clientId}`} className="text-decoration-none">
                                        <ul className="homelist-item" key={x.clientId}>
                                            <li className="homelist-content">{x.name}</li>
                                            <li className="homelist-content">Endereço: {x.address}</li>
                                        </ul>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6">
                        <div className="homelist-container">
                            <ul className="homelist-title">
                                <li><i className="fa fa-cart-plus" /> Novos Produtos</li>
                                <Link to={`/product-list}`} className="text-decoration-none">ver lista completa</Link>
                            </ul>
                            <div >
                                {productList.content.map(x => (
                                    <Link to={`/product/${x.productId}`} className="text-decoration-none">
                                        <ul className="homelist-item">
                                            <li className="homelist-content">Produto: {x.description}</li>
                                            <li className="homelist-content">Preço: {x.price.toFixed(2)}</li>
                                        </ul>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6">
                        <div className="homelist-container">
                            <ul className="homelist-title">
                                <li><i className="fa fa-book" /> Dívidas Pendentes </li>
                                <Link to={`/debt-list`} className="text-decoration-none">ver lista completa</Link>
                            </ul>
                            <div>
                                {debtList.content.map(x => (
                                    <Link to={`/debt/${x.debtId}`} className="text-decoration-none">
                                        <ul className="homelist-item" >
                                            <li className="homelist-content">Produto: {x.productDescription} ({x.productQuantity} unidades)</li>
                                            <li className="homelist-content">Data da Compra: {x.debtDate}</li>
                                        </ul>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6">
                        <div className="homelist-container">
                            <ul className="homelist-title">
                                <li><i className="fa fa-book" aria-hidden="true" /> Dívidas Pagas </li>
                                <Link to={`/paid-list`} className="text-decoration-none">ver lista completa</Link>
                            </ul>
                            <div>
                                {paidList.content.map(x => (
                                    <Link to={`/paid/${x.paidId}`} className="text-decoration-none">
                                        <ul className="homelist-item" >
                                            <li className="homelist-content">Produto: {x.productDescription} ({x.productQuantity} unidades)</li>
                                            <li className="homelist-content">Data do Pagamento: {x.paymentDate}</li>
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