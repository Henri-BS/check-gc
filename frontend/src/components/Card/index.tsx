import axios from "axios";
import { ClientEditForm } from "components/Form";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Client, ClientAccount, ClientProps } from "types/client";
import { Debt } from "types/debt";
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
        <div className="card-md-container">
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
    );
}

export function DebtProfileCard({ debt }: DebtCardProps) {
    return (
        <div className="card-md-container">
            <ul className="card-md-list">
                <li className="card-md-item card-md-content border-0">Data da Compra: {debt.debtDate}</li>
                <li className="card-md-item card-md-content">Produto Solicitado: {debt.product}</li>
                <li className="card-md-item card-md-content">Quantidade do Produto: {debt.productQuantity}</li>
                <li className="card-md-item card-md-content">Valor da Compra: {debt.productAmount}</li>
                <li className="card-md-item card-md-content">Situação: {debt.status}</li>
            </ul>
        </div>
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