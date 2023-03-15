import axios, { AxiosRequestConfig } from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Client, ClientProps } from "types/client";
import { Debt, DebtProps } from "types/debt";
import { Product, ProductProps } from "types/product";
import { BASE_URL } from "utils/requests";
import "./styles.css"

export function ClientAddForm() {

    const navigate = useNavigate();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        const name = (event.target as any).name.value;
        const phoneNumber = (event.target as any).phoneNumber.value;
        const address = (event.target as any).address.value;

        const config: AxiosRequestConfig = {
            method: 'POST',
            baseURL: BASE_URL,
            url: `/client/add`,
            data: {
                name: name,
                phoneNumber: phoneNumber,
                address: address
            }
        }
        axios(config).then((response) => {
            navigate(`/client/list`)
        })
    }

    return (
        <form onSubmit={handleSubmit} className="form-container">
            <div className="form-card">
                <div className="form-group">
                    <label htmlFor="name">Nome do Cliente</label>
                    <input id="name" type="text" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="phoneNumber">Contato</label>
                    <input id="phoneNumber" type="text" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="address">Endereço</label>
                    <input id="address" type="text" className="form-control" />
                </div>
            </div>
            <div className="modal-footer">
                <button type="submit" className="btn btn-confirm">Adicionar</button>
            </div>
        </form>
    );
}

export function ClientEditForm({ clientId }: ClientProps) {

    const [client, setClient] = useState<Client>();
    useEffect(() => {
        axios.get(`${BASE_URL}/client/${clientId}`)
            .then((response) => {
                setClient(response.data);
            });
    }, [clientId]);

    const navigate = useNavigate();
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        const name = (event.target as any).name.value;
        const phoneNumber = (event.target as any).phoneNumber.value;
        const address = (event.target as any).address.value;

        const config: AxiosRequestConfig = {
            method: "PUT",
            baseURL: BASE_URL,
            url: `/client/edit`,
            data: {
                clientId: clientId,
                name: name,
                phoneNumber: phoneNumber,
                address: address
            }
        }
        axios(config).then((response) => {
            navigate(`/client/list`)
        });
    }

    return (
        <form onSubmit={handleSubmit} className="form-container">
            <div className="form-card">
                <div className="form-group">
                    <label htmlFor="name">Nome do Cliente</label>
                    <input id="name" type="text" className="form-control" defaultValue={client?.name} />
                </div>
                <div className="form-group">
                    <label htmlFor="phoneNumber">Contato</label>
                    <input id="phoneNumber" type="text" className="form-control" defaultValue={client?.phoneNumber} />
                </div>
                <div className="form-group">
                    <label htmlFor="address">Endereço</label>
                    <input id="address" type="text" className="form-control" defaultValue={client?.address} />
                </div>
            </div>
            <div className="modal-footer">
                <button type="submit" className="btn btn-confirm">Editar</button>
            </div>
        </form>
    );
}

export function DebtAddForm() {

    const navigate = useNavigate();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        const debtDate = (event.target as any).debtDate.value;
        const productQuantity = (event.target as any).productQuantity.value;
        const clientName = (event.target as any).clientName.value;
        const product = (event.target as any).product.value;
        const status = (event.target as any).status.value;

        const config: AxiosRequestConfig = {
            method: "POST",
            baseURL: BASE_URL,
            url: `/debt/add`,
            data: {
                debtDate: debtDate,
                productQuantity: productQuantity,
                clientName: clientName,
                product: product,
                status: status
            }
        }
        axios(config).then((response) => {
            navigate("/debt-list");
        });
    }
    return (
        <form onSubmit={handleSubmit} className="form-container">
            <div className="form-card">
                <div className="form-group gerencg-form-group">
                    <label htmlFor="clientName">Cliente</label>
                    <input id="clientName" type="text" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="debtDate">Data da Compra</label>
                    <input id="debtDate" type="text" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="productQuantity">Quantidade do Produto</label>
                    <input id="productQuantity" type="text" className="form-control" />
                </div>

                <div className="form-group">
                    <label htmlFor="product">Produto</label>
                    <input id="product" type="text" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="status">Situtação da Compra</label>
                    <input id="status" type="text" className="form-control" />
                </div>
            </div>
            <div className="modal-footer">
                <button type="submit" className="btn btn-confirm">Adicionar</button>
            </div>
        </form>
    );
}

export function DebtEditForm({ debtId }: DebtProps) {

    const navigate = useNavigate();

    const [debt, setDebt] = useState<Debt>();
    useEffect(() => {
        axios.get(`${BASE_URL}/debt/${debtId}`)
            .then((response) => {
                setDebt(response.data);
            });
    }, [debtId]);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        const debtDate = (event.target as any).debtDate.value;
        const productQuantity = (event.target as any).productQuantity.value;
        const clientName = (event.target as any).clientName.value;
        const product = (event.target as any).product.value;
        const status = (event.target as any).status.value;

        const config: AxiosRequestConfig = {
            method: "PUT",
            baseURL: BASE_URL,
            url: `/debt/edit`,
            data: {
                debtId: debtId,
                debtDate: debtDate,
                productQuantity: productQuantity,
                clientName: clientName,
                product: product,
                status: status
            }
        }
        axios(config).then((response) => {
            navigate("/debt-list");
        });
    }
    return (
        <form onSubmit={handleSubmit} className="form-container">
            <div className="form-card">
                <div className="form-group gerencg-form-group">
                    <label htmlFor="clientName">Cliente</label>
                    <input id="clientName" type="text" className="form-control" defaultValue={debt?.clientName} />
                </div>
                <div className="form-group">
                    <label htmlFor="debtDate">Data da Compra</label>
                    <input id="debtDate" type="date" className="form-control" defaultValue={debt?.debtDate} />
                </div>
                <div className="form-group">
                    <label htmlFor="productQuantity">Quantidade do Produto</label>
                    <input id="productQuantity" className="form-control" defaultValue={debt?.productQuantity} />
                </div>

                <div className="form-group">
                    <label htmlFor="product">Produto</label>
                    <input id="product" className="form-control" defaultValue={debt?.product} />
                </div>
                <div className="form-group">
                    <label htmlFor="status">Situtação da Compra</label>
                    <input id="status" className="form-control" defaultValue={debt?.status} />
                </div>
            </div>
            <div className="modal-footer">
                <button type="submit" className="btn btn-confirm">Editar</button>
            </div>
        </form>
    );
}


export function ProductAddForm() {

    const navigate = useNavigate();
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        const description = (event.target as any).description.value;
        const price = (event.target as any).price.value;

        const config: AxiosRequestConfig = {
            method: "POST",
            baseURL: BASE_URL,
            url: "/product/add",
            data: {
                description: description,
                price: price,
            }
        }
        axios(config).then((response) => {
            navigate(`/product-list`)
        });
    }
    return (
        <form onSubmit={handleSubmit} className="form-container">
            <div className="form-card">
                <div className="form-group">
                    <label htmlFor="description">Descrição:</label>
                    <input className="form-control" id="description" />
                </div>
                <div className="form-group">
                    <label htmlFor="price">Preço:</label>
                    <input className="form-control" id="price" />
                </div>
            </div>
            <div className="modal-footer">
                <button type="submit" className="btn btn-confirm">Adicionar</button>
            </div>
        </form>
    );
}

export function ProductEditForm({ productId }: ProductProps) {
    const navigate = useNavigate();
    const [product, setProduct] = useState<Product>();
    useEffect(() => {
        axios.get(`${BASE_URL}/product/${productId}`)
            .then((response) => {
                setProduct(response.data);
            });
    }, [productId]);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        const description = (event.target as any).description.value;
        const price = (event.target as any).price.value;

        const config: AxiosRequestConfig = {
            method: "PUT",
            baseURL: BASE_URL,
            url: "/product/edit",
            data: {
                productId: productId,
                description: description,
                price: price,
            }
        }
        axios(config).then((response) => {
            navigate(`/product/${productId}`)
        });
    }

    return (
        <form onSubmit={handleSubmit} className="form-container">
            <div className="form-card">
                <div className="form-group">
                    <label htmlFor="description">Descrição:</label>
                    <input id="description" className="form-control" defaultValue={product?.description} />
                </div>
                <div className="form-group">
                    <label htmlFor="price">Preço:</label>
                    <input id="price" className="form-control" defaultValue={product?.price} />
                </div>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Cancelar</button>
                <button type="submit" className="btn btn-confirm">Editar</button>
            </div>
        </form>
    );
}