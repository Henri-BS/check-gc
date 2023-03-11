import axios from "axios";
import { ClientEditForm, DebtEditForm } from "components/Form";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Client, ClientProps } from "types/client";
import { Debt, DebtProps } from "types/debt";
import { Product } from "types/product";
import { BASE_URL } from "utils/requests";
import "./styles.css"

type ClientCardProps = {
    client: Client;
}

export function ClientCard({ client }: ClientCardProps) {

    const [clientProfile, setClientProfile] = useState<Client>();
    useEffect(() => {
        axios.put(`${BASE_URL}/client/update-value/${client.clientId}`)
            .then((response) => {
                setClientProfile(response.data);
            })
    }, [client.clientId]);


    const params = useParams();

    return (
        <>
            <Link to={`/client/${client.clientId}`} className="text-decoration-none text-dark">
                <div className="card-md-container">
                    <nav className="card-md-title">
                        {client.name}
                    </nav>
                    <ul className="card-md-list">
                        <li className="card-md-item card-md-content">Endereço: {client.address}</li>
                        <li className="card-md-item card-md-content">Contato: {client.phoneNumber}</li>
                        <li className="card-md-item card-md-content">Valor Total da Conta: {clientProfile?.account.debtAmount}</li>
                        <li className="card-md-item card-md-content">Compras Realizadas: {clientProfile?.account.debtQuantity}</li>
                        <li className="card-md-item card-md-content">Última Atualização: {clientProfile?.account.lastModifiedDate}</li>
                    </ul>
                </div>
            </Link>

            <div className="modal fade" id="optionModal" role={"dialog"}>
                <div className="modal-dialog" role={"document"}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <label htmlFor="clientLabel" className="modal-title">Menu de opções </label>
                            <button className="close" data-bs-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true"><i className="fa fa-times" /></span>
                            </button>
                        </div>
                        <hr />
                        <ul className="modal-body md-card-list">
                            <li className="card-md-content link-option" data-bs-target="#clientEditModal" data-bs-toggle="modal">
                                <i className="fa fa-edit" /> Editar Cliente
                            </li>

                            <li className="card-md-content link-option">
                                <i className="fa fa-trash" /> Deletar Cliente
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="clientEditModal" role={"dialog"}>
                <div className="modal-dialog" role={"document"}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <label htmlFor="clientLabel" className="modal-title">Editar cliente</label>
                            <button className="close" data-bs-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true"><i className="fa fa-times" /></span>
                            </button>
                        </div>
                        <div className="modal-body"><ClientEditForm clientId={`${params.clientId}`} /></div>
                    </div>
                </div>
            </div>
        </>
    );
}

export function ClientProfileCard({ clientId }: ClientProps) {

    const [client, setClient] = useState<Client>();
    useEffect(() => {
        axios.get(`${BASE_URL}/client/${clientId}`)
            .then((response) => {
                setClient(response.data);
            })
    }, [clientId]);

    useEffect(() => {
        axios.put(`${BASE_URL}/client/update-value/${client?.clientId}`)
            .then((response) => {
                setClient(response.data);
            })
    }, [client?.clientId]);

    return (
        <>
            <nav className="card-lg-container">
                <div className="card-md-title">
                    {client?.name}
                </div>
                <li className="card-md-content">Endereço: {client?.address}</li>
                <li className="card-md-content">Contato: {client?.phoneNumber}</li>
                <li className="card-md-content">Valor Total da Conta: {client?.account.debtAmount}</li>
                <li className="card-md-content">Compras Realizadas: {client?.account.debtQuantity}</li>
                <li className="card-md-content">Última Atualização: {client?.account.lastModifiedDate}</li>
            </nav>
        </>
    );
}

type DebtCardProps = {
    debt: Debt;
}

export function DebtCard({ debt }: DebtCardProps) {
    return (
        <Link to={`/debt/${debt.debtId}`}>
            <div className="card-md-container" >
                <div className="card-md-title">
                    {debt.clientName}
                </div>
                <ul className="card-md-list">
                    <li className="card-md-item card-md-content">Data da Compra: {debt.debtDate}</li>
                    <li className="card-md-item card-md-content">Produto Solicitado: {debt.product}</li>
                    <li className="card-md-item card-md-content">Quantidade do Produto: {debt.productQuantity}</li>
                    <li className="card-md-item card-md-content">Valor da Compra: {debt.productAmount}</li>
                    <li className="card-md-item card-md-content">Situação: {debt.status}</li>
                </ul>
            </div>
        </Link>
    );
}

export function DebtProfileCard({ debtId }: DebtProps) {

    const params = useParams();
    const [debt, setDebt] = useState<Debt>();
    useEffect(() => {
        axios.get(`${BASE_URL}/debt/${debtId}`)
            .then((response) => {
                setDebt(response.data);
            });
    }, [debtId]);

    return (
        <>
            <div className="sub-navbar">
                <Link to={`/client/${debt?.clientId}`} className="sub-navbar-item">
                    <i className="fa fa-chevron-left" />
                </Link>
                <button className="btn btn-primary" data-bs-target="#debtEditModal" data-bs-toggle="modal">
                    <i className="fa fa-edit" /> Editar Compra
                </button>
                <button className="btn btn-danger" data-bs-target="#debtDeleteModal" data-bs-toggle="modal">
                    <i className="fa fa-trash" /> Deletar Compra
                </button>
            </div>
            <hr />
            <ul className="card-md-list">
                <li className="card-lg-item "> Data da Compra:
                    <p className="card-lg-content">{debt?.debtDate}</p>
                </li>
                <li className=" card-lg-item">Produto Solicitado:
                    <p className="card-lg-content">{debt?.product}</p>
                </li>
                <li className=" card-lg-item">Quantidade do Produto:
                    <p className="card-lg-content">{debt?.productQuantity}</p>
                </li>
                <li className=" card-lg-item">Valor da Compra:
                    <p className="card-lg-content">{debt?.productAmount}</p>
                </li>
                <li className=" card-lg-item">Situação:
                    <p className="card-lg-content">{debt?.status}</p>
                </li>
            </ul>
            <div className="modal fade" role={"dialog"} id={"debtEditModal"}>
                <div className="modal-dialog" role={"document"}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <label htmlFor="debtLabel" className="modal-title">Alterar dados da compra</label>
                            <button className="close" data-bs-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true"><i className="fa fa-times"/></span>
                                </button>                    
                        </div>
<div className="modal-body"><DebtEditForm debtId={`${params.debtId}`} /></div>
                    </div>
                </div>
            </div>
        </>
    );
}


type ProductCardProps = {
    product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
    return (
        <div className="card-md-container">
            <div className="card-md-title">
                {product.description}
            </div>
            <div className="card-md-item card-md-content"> Preço: {product.price}</div>
        </div>
    );
}