import axios from "axios";
import { useEffect, useState } from "react";
import { Client, ClientAccount } from "types/client";
import { Debt } from "types/debt";
import { Product } from "types/product";
import { BASE_URL } from "utils/requests";
import "./styles.css"

type ClientCardProps = {
    client: Client;
}


export function ClientCard({ client }: ClientCardProps) {
    const [account, setAccount] = useState<ClientAccount>();
    useEffect(() => {
        axios.get(`${BASE_URL}/account/client/${client.clientId}`)
            .then((response) => {
                setAccount(response.data);
            })
    }, [client.clientId])
    return (
        <div className="card-md-container">
            <div className="card-md-title">
                <i className="fa fa-user" /> {client.name}
            </div>
            <ul className="card-md-list">
                <li className="card-md-item card-md-content">Endereço: {client.address}</li>
                <li className="card-md-item card-md-content">Contato: {client.phoneNumber}</li>
                <li className="card-md-item card-md-content">Valor Total da Conta: {account?.debtAmount}</li>
                <li className="card-md-item card-md-content">Compras Realizadas: {account?.debtQuantity}</li>
                <li className="card-md-item card-md-content">Última Atualização: {account?.lastModifiedDate}</li>
            </ul>
        </div>
    );
}

type DebtCardProps = {
    debt: Debt;
}

export function DebtCard({ debt }: DebtCardProps) {
    return (
        <div className="card-md-container">
            <div className="card-md-title">
                <i className="fa fa-book" />{debt.client}
            </div>
            <ul className="card-md-list">
                <li className="card-md-item card-md-content">Data da Compra: {debt.debtDate}</li>
                <li className="card-md-item card-md-content">Produto Solicitado: {debt.productDescription}</li>
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
    return(
    <div className="card-md-container">
        <div className="card-md-title">
            <i className="fa fa-cart-plus" /> {product.description}
        </div>
        <div className="card-md-item card-md-content">{product.price}</div>
    </div>
    );
}