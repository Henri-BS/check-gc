import axios from "axios";
import { ClientCard, DebtCard, ProductCard } from "components/Card";
import { AddClientForm } from "components/Form";
import { Navbar } from "components/Navbar";
import Pagination from "components/Pagination";
import { useEffect, useState } from "react";
import { ClientPage } from "types/client";
import { DebtPage } from "types/debt";
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

                <ul className="pagination-container">
                    <li className="page-link" data-bs-target="#addClientModal" data-bs-toggle="modal"><i className="fa fa-save" /> Adicionar Cliente</li>
                    <li><Pagination page={clientList} onPageChange={handlePageChange} /></li>
                    <li>Clientes Cadastrados: {clientList.totalElements}</li>
                </ul>
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
                        <div className="modal-body"><AddClientForm /></div>
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
        axios.get(`${BASE_URL}/debt/list?page=${pageNumber}}&size=3`)
            .then((response) => {
                setDebtList(response.data);
            });
    }, [pageNumber]);
    return (
        <>
            <Navbar />
            <div className="container">
                <div className="pagination-container">
                    <Pagination page={debtList} onPageChange={handlePageChange} />
                </div>
                <div className="row">
                    {debtList.content.map(x => (
                        <div className="col-12 col-md-6 col-xl-4 mb-3">
                            <DebtCard debt={x} />
                        </div>
                    ))}
                </div>
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
                <div className="pagination-container">
                    <Pagination page={productList} onPageChange={handlePageChange} />
                </div>
                <div className="row">
                    {productList.content.map(x => (
                        <div className="col-12 col-md-6 col-xl-4">
                            <ProductCard product={x} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}