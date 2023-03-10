import axios from "axios";
import { ClientCard, DebtCard, DebtSmallCard, ProductCard } from "components/Card";
import { ClientAddForm, DebtAddForm, ProductAddForm } from "components/Form";
import { Navbar } from "components/Navbar";
import Pagination from "components/Pagination";
import { useEffect, useState } from "react";
import { ClientPage, ClientProps } from "types/client";
import { Debt, DebtPage } from "types/debt";
import { ProductPage } from "types/product";
import { BASE_URL } from "utils/requests";
import "./styles.css"

export function ClientList() {

    const [pageNumber, setPageNumber] = useState(0);
    const handlePageChange = (newPageNumber: number) => {
        setPageNumber(newPageNumber);
    }

    const [clientList, setClientList] = useState<ClientPage>({
        content: [],
        number: 0
    });
    useEffect(() => {
        axios.get(`${BASE_URL}/client/list?page=${pageNumber}&size=3`)
            .then((response) => {
                setClientList(response.data);
            });
    }, [pageNumber]);



    return (
        <>
            <Navbar />
            <div className="container">

                <nav className="pagination-container row">
                    <div className="col-12 col-md-4 col-xl-3 mb-2" data-bs-target="#addClientModal" data-bs-toggle="modal">
                        <button className="btn btn-confirm"><i className="fa fa-save" /> Adicionar Cliente</button>
                    </div>
                    <div className="col-12 col-md-4 col-xl-6 mb-2" ><Pagination page={clientList} onPageChange={handlePageChange} /></div>
                    <div className="col-12 col-md-4 col-xl-3 mb-2" >Clientes Cadastrados: {clientList.totalElements}</div>
                </nav>
                <div className="row">
                    {clientList.content?.map(x => (
                        <div key={x.clientId} className="col-12 col-md-6 col-xl-4 mb-3">
                            <ClientCard client={x} />
                        </div>
                    ))}
                </div>
            </div>
            <div className="modal fade" id="addClientModal" role={"dialog"}>
                <div className="modal-dialog" role={"document"}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <label htmlFor="clientLabel" className="modal-title">Adicionar um novo cliente</label>
                            <button className="close" data-bs-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true"><i className="fa fa-times" /></span>
                            </button>
                        </div>
                        <div className="modal-body"><ClientAddForm /></div>
                    </div>
                </div>
            </div>
        </>
    );
}

export function DebtList() {

    const [pageNumber, setPageNumber] = useState(0);
    const handlePageChange = (newPageNumber: number) => {
        setPageNumber(newPageNumber);
    }

    const [debtList, setDebtList] = useState<DebtPage>({
        content: [],
        number: 0
    });
    useEffect(() => {
        axios.get(`${BASE_URL}/debt/list?page=${pageNumber}&size=3`)
            .then((response) => {
                setDebtList(response.data);
            });
    }, [pageNumber]);
    return (
        <>
            <Navbar />
            <div className="container">
                <div className="pagination-container row">
                    <div className="col-12 col-md-4 col-xl-3 mb-2" data-bs-target="#addDebtModal" data-bs-toggle="modal">
                        <button className="btn btn-confirm"><i className="fa fa-save" /> Adicionar Compra</button>
                    </div>
                    <div className="col-12 col-md-4 col-xl-6 mb-2" >
                        <Pagination page={debtList} onPageChange={handlePageChange} />
                    </div>
                    <div className="col-12 col-md-4 col-xl-3 mb-2" >Compras Realizadas: {debtList.totalElements}</div>
                </div>

                <div className="row">
                    {debtList.content?.map(x => (
                        <div key={x.debtId} className="col-12 col-md-6 col-xl-4 mb-3">
                            <DebtCard debt={x} />
                        </div>
                    ))}
                </div>
            </div>

            <div className="modal fade" id="addDebtModal" role={"dialog"}>
                <div className="modal-dialog" role={"document"}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <label htmlFor="clientLabel" className="modal-title">Adicionar um novo cliente</label>
                            <button className="close" data-bs-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true"><i className="fa fa-times" /></span>
                            </button>
                        </div>
                        <div className="modal-body"><DebtAddForm /></div>
                    </div>
                </div>
            </div>
        </>
    );
}

export function DebtListByClient({ clientId }: ClientProps) {

    const [debtList, setDebtList] = useState<Debt[]>();
    useEffect(() => {
        axios.get(`${BASE_URL}/debt/list-client/${clientId}`)
            .then((response) => {
                setDebtList(response.data);
            })
    }, [clientId]);

    return (
        <>
            <ul className="home-bar-title">
                <li><i className="fa fa-book" /> D??vidas</li>

            </ul>
            <div className="horizontal-list-container ">
                {debtList?.map((x) => (
                    <div key={x.debtId} className="horizontal-list-item">
                        <DebtSmallCard debt={x} />
                    </div>
                ))}
            </div>
        </>
    );
}

export function ProductList() {

    const [pageNumber, setPageNumber] = useState(0);
    const handlePageChange = (newPageNumber: number) => {
        setPageNumber(newPageNumber);
    }

    const [productList, setProductList] = useState<ProductPage>({
        content: [],
        number: 0
    });
    useEffect(() => {
        axios.get(`${BASE_URL}/product/list?page=${pageNumber}&size=3`)
            .then((response) => {
                setProductList(response.data);
            });
    }, [pageNumber]);

    return (
        <>
            <Navbar />
            <div className="container">
                <div className="pagination-container row">
                    <div className="col-12 col-md-4 col-xl-3 mb-2" data-bs-target="#addProductModal" data-bs-toggle="modal">
                        <button className="btn btn-confirm"><i className="fa fa-save" /> Adicionar Produto</button>
                    </div>
                    <div className="col-12 col-md-4 col-xl-6 mb-2" >
                        <Pagination page={productList} onPageChange={handlePageChange} />
                    </div>
                    <div className="col-12 col-md-4 col-xl-3 mb-2" >Produtos Catalogados: {productList.totalElements}</div>
                </div>

                <div className="row">
                    {productList.content.map(x => (
                        <div className="col-12 col-md-6 col-xl-4">
                            <ProductCard product={x} />
                        </div>
                    ))}
                </div>
            </div>

            <div className="modal fade" id="addProductModal" role={"dialog"} >
                <div className="modal-dialog" role={"document"}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <label htmlFor="productLabel" className="modal-title">Adicionar um novo produto</label>
                            <button className="close" data-bs-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true"><i className="fa fa-times" /></span>
                            </button>
                        </div>
                        <div className="modal-body"><ProductAddForm/></div>
                    </div>
                </div>
            </div>
        </>
    );
}