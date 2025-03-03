import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AccountTotalValues, ClientPage } from "types/client";
import { DebtPage } from "types/debt";
import { PaidPage } from "types/paid";
import { ProductPage } from "types/product";
import { BASE_URL } from "utils/requests";
import "./styles.css"
import moment from "moment";
import { ClientMockHomeList, DebtMockHomeList, PaidMockHomeList, ProductMockHomeList } from "mock/MockList";
import { ClientMockTotalValues } from "mock/MockProfile";

function Home() {

    const [value, setValue] = useState<AccountTotalValues>();
    useEffect(() => {
        axios.get(`${BASE_URL}/client/total-value`)
            .then((response) => {
                setValue(response.data);
            })
    }, []);

    const [clientList, setClientList] = useState<ClientPage>({ content: [], number: 0 });
    useEffect(() => {
        axios.get(`${BASE_URL}/client/list?size=8&sort=clientId,desc`)
            .then((response) => {
                setClientList(response.data);
            });
    }, []);


    const [debtList, setDebtList] = useState<DebtPage>({ content: [], number: 0 });
    useEffect(() => {
        axios.get(`${BASE_URL}/debt/list?size=8&sort=debtId,desc`)
            .then((response) => {
                setDebtList(response.data)
            });
    }, []);

    const [paidList, setPaidList] = useState<PaidPage>({ content: [], number: 0 });
    useEffect(() => {
        axios.get(`${BASE_URL}/paid/list?size=8&sort=paidId,desc`)
            .then((response) => {
                setPaidList(response.data)
            });
    }, []);

    const [productList, setProductList] = useState<ProductPage>({ content: [], number: 0 });
    useEffect(() => {
        axios.get(`${BASE_URL}/product/list?size=8&sort=productId,desc`)
            .then((response) => {
                setProductList(response.data);
            });
    }, []);


    return (
        <>
            {!!value ? "" :
                <b className="text-danger fs-5 d-flex m-3">
                    Esta é uma demonstração com funcionalidades limitadas, possibilitando apenas a visualização de dados estáticos. Uma versão mais atualizada será disponibilizada em breve.
                </b>
            }
            {!value ? <ClientMockTotalValues /> :
                <nav className="bar-container row">
                    <div className="bar-item col-6">
                        <b>Valor das Dívidas Pendentes:</b> R${value?.debtAmount.toFixed(2)}
                    </div>
                    <div className="bar-item col-6">
                        <b>Valor das Dívidas Paga:</b> R${value?.paidAmount.toFixed(2)}
                    </div>
                    <div className="bar-item col-6">
                        <b>Quantidade de Dívidas Pendentes:</b> {value?.debtQuantity}
                    </div>  <div className="bar-item col-6">
                        <b>Quantidade de Dívidas Pagas:</b> {value?.paidQuantity}
                    </div>
                    <div className="bar-item col-6">
                        <b>Maior Dívida Pendente:</b> R${value?.debtMaxValue.toFixed(2)}
                    </div>
                    <div className="bar-item col-6">
                        <b>Maior Dívida Paga:</b> R${value?.paidMaxValue.toFixed(2)}
                    </div>
                </nav>

            }
            <div className="container">

                <div className="row">
                    <div className="col-12 col-lg-6">
                        <div className="homelist-container">
                            <ul className="homelist-title">
                                <li><i className="fa fa-user" /> Novos Clientes</li>
                                <Link to={`/client-list`}><li>ver lista completa</li></Link>
                            </ul>
                            {clientList.content.length === 0 ? <ClientMockHomeList /> :

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
                            }
                        </div>
                    </div>
                    <div className="col-12 col-lg-6">
                        <div className="homelist-container">
                            <ul className="homelist-title">
                                <li><i className="fa fa-cart-plus" /> Novos Produtos</li>
                                <Link to={`/product-list}`}>ver lista completa</Link>
                            </ul>
                            {productList.content.length === 0 ? <ProductMockHomeList /> :
                                <div>
                                    {productList.content.map(x => (
                                        <Link to={`/product/${x.productId}`} className="text-decoration-none">
                                            <ul className="homelist-item">
                                                <li className="homelist-content">Produto: {x.description}</li>
                                                <li className="homelist-content">Preço: R${x.price.toFixed(2)}</li>
                                            </ul>
                                        </Link>
                                    ))}
                                </div>
                            }
                        </div>
                    </div>
                    <div className="col-12 col-lg-6">
                        <div className="homelist-container">
                            <ul className="homelist-title">
                                <li><i className="fa fa-book" /> Dívidas Pendentes </li>
                                <Link to={`/debt-list`}>ver lista completa</Link>
                            </ul>
                            {debtList.content.length === 0 ? <DebtMockHomeList /> :
                                <div>
                                    {debtList.content.map(x => (
                                        <Link to={`/debt/${x.debtId}`} className="text-decoration-none">
                                            <ul className="homelist-item" >
                                                <li className="homelist-content">Produto: {x.productDescription} ({x.productQuantity} unidades)</li>
                                                <li className="homelist-content">Data da Compra: {moment(x.debtDate).format('DD/MM/YYYY')}</li>
                                            </ul>
                                        </Link>
                                    ))}
                                </div>
                            }
                        </div>
                    </div>
                    <div className="col-12 col-lg-6">
                        <div className="homelist-container">
                            <ul className="homelist-title">
                                <li><i className="fa fa-book" aria-hidden="true" /> Dívidas Pagas </li>
                                <Link to={`/paid-list`}>ver lista completa</Link>
                            </ul>

                            {paidList.content.length === 0 ? <PaidMockHomeList /> :
                                <div>
                                    {paidList.content.map(x => (
                                        <Link to={`/paid/${x.paidId}`} className="text-decoration-none">
                                            <ul className="homelist-item" >
                                                <li className="homelist-content">Produto: {x.productDescription} ({x.productQuantity} unidades)</li>
                                                <li className="homelist-content">Data do Pagamento: {moment(x.paymentDate).format('DD/MM/YYYY')}</li>
                                            </ul>
                                        </Link>
                                    ))}
                                </div>
                            }

                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Home;