import axios, { AxiosRequestConfig } from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Client, ClientPage, ClientProps } from "types/client";
import { Debt, DebtProps } from "types/debt";
import { Paid, PaidProps } from "types/paid";
import { Product, ProductPage, ProductProps } from "types/product";
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
        const clientName = (event.target as any).clientName.value;
        const debtDate = (event.target as any).debtDate.value;
        const productDescription = (event.target as any).productDescription.value;
        const productQuantity = (event.target as any).productQuantity.value;
        const status = (event.target as any).status.value;

        const config: AxiosRequestConfig = {
            method: "POST",
            baseURL: BASE_URL,
            url: `/debt/add`,
            data: {
                clientName: clientName,
                debtDate: debtDate,
                productDescription: productDescription,
                productQuantity: productQuantity,
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
                <div className="form-group">
                    <ClientDatalist />
                </div>
                <div className="form-group">
                    <label htmlFor="debtDate">Data da Compra</label>
                    <input id="debtDate" type="date" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="productQuantity">Quantidade do Produto</label>
                    <input id="productQuantity" type="text" className="form-control" />
                </div>
                <div className="form-group">
                    <ProductDatalist />
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
            <div className="form-group ">
                    <ClientDatalist/>
                </div>

                <div className="form-group">
                    <ProductDatalist/>
                </div>

                <div className="form-group">
                    <label htmlFor="debtDate">Data da Compra</label>
                    <input id="debtDate" type="date" className="form-control" defaultValue={debt?.debtDate} />
                </div>
                <div className="form-group">
                    <label htmlFor="productQuantity">Quantidade do Produto</label>
                    <input id="productQuantity" className="form-control" defaultValue={debt?.productQuantity} />
                </div>

              
            </div>
            <div className="modal-footer">
                <button type="submit" className="btn btn-confirm">Editar</button>
            </div>
        </form>
    );
}

export function PaidAddForm() {

    const navigate = useNavigate();
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        const clientName = (event.target as any).clientName.value;
        const paymentDate = (event.target as any).paymentDate.value;
        const paymentType = (event.target as any).paymentType.value;
        const productQuantity = (event.target as any).productQuantity.value;
        const productDescription = (event.target as any).productDescription.value;

        const config: AxiosRequestConfig = {
            method: "POST",
            baseURL: BASE_URL,
            url: `/paid/add`,
            data: {
                clientName: clientName,
                paymentDate: paymentDate,
                paymentType: paymentType,
                productDescription: productDescription,
                productQuantity: productQuantity
            }
        }
        axios(config).then((response) => {
            navigate(`/debt-list`);
        })
    }

    return (
        <form onSubmit={handleSubmit} className="form-container">
            <div className="form-card">
                <div className="form-group ">
                    <ClientDatalist/>
                </div>

                <div className="form-group">
                    <ProductDatalist/>
                </div>

                <div className="form-group">
                    <label htmlFor="paymentDate">Data do Pagamento</label>
                    <input id="paymentDate" type="date" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="paymentType">Forma de Pagamento</label>
                    <input id="paymentType" type="text" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="productQuantity">Quantidade do Produto</label>
                    <input id="productQuantity" type="text" className="form-control" />
                </div>
            </div>

            <div className="modal-footer">
                <button type="submit" className="btn btn-confirm">Adicionar</button>
            </div>
        </form>
    );
}

export function PaidEditForm({ paidId }: PaidProps) {

    const [paid, setPaid] = useState<Paid>();
    useEffect(() => {
        axios.get(`${BASE_URL}/paid/${paidId}`)
            .then((response) => {
                setPaid(response.data);
            })
    }, [paidId]);

    const navigate = useNavigate();
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        const clientName = (event.target as any).clientName.value;
        const paymentDate = (event.target as any).paymentDate.value;
        const paymentType = (event.target as any).paymentType.value;
        const productQuantity = (event.target as any).productQuantity.value;
        const productDescription = (event.target as any).productDescription.value;

        const config: AxiosRequestConfig = {
            method: "PUT",
            baseURL: BASE_URL,
            url: `/paid/edit`,
            data: {
                paidId: paidId,
                clientName: clientName,
                paymentDate: paymentDate,
                paymentType: paymentType,
                productDescription: productDescription,
                productQuantity: productQuantity
            }
        }
        axios(config).then((response) => {
            navigate(`/paid-list`);
        })
    }

    return (
        <form onSubmit={handleSubmit} className="form-container">
            <div className="form-card">
                <div className="form-group">
                    <ClientDatalist/>
                </div>
                <div className="form-group">
                    <ProductDatalist />
                </div>
                <div className="form-group">
                    <label htmlFor="paymentDate">Data do Pagamento</label>
                    <input id="paymentDate" type="date" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="paymentType">Forma de Pagamento</label>
                    <input id="paymentType" type="text" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="productQuantity">Quantidade do Produto</label>
                    <input id="productQuantity" type="text" className="form-control" />
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

export function ClientDatalist() {
    const [value, setValue] = useState("");
    const [clientPage, setClientPage] = useState<ClientPage>({
        content: [],
        number: 0
    });
    useEffect(() => {
        axios.get(`${BASE_URL}/client/list-by-name?name=${value}`)
            .then((response) => {
                setClientPage(response.data);
            });
    }, [value]);

    return (
        <>
            <label htmlFor="clientName">Cliente</label>
            <input
                id="clientName"
                list="clientList"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="form-control"
            />
            <datalist id="clientList">
                {clientPage.content.filter(x =>
                    x.name.includes(value))
                    .map(x => (
                        <option id="value" value={x.name} key={x.clientId}>
                            {x.name}
                        </option>
                    ))}
            </datalist>
        </>
    );
}

export function ProductDatalist() {
    const [value, setValue] = useState("");
    const [productPage, setProductPage] = useState<ProductPage>({
        content: [],
        number: 0
    })
    useEffect(() => {
        axios.get(`${BASE_URL}/product/list-by-description?description=${value}`)
            .then((response) => {
                setProductPage(response.data);
            })
    }, [value]);

    return (
        <>
            <label htmlFor="productDescription">Produto</label>
            <input
                id="productDescription"
                list="productList"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="form-control"
            />
            <datalist id="productlist">
                {productPage.content.filter(x =>
                    x.description.includes(value))
                    .map(x => (
                        <option id="value" value={x.description} key={x.productId}>
                            {x.description}
                        </option>
                    ))
                }
            </datalist>
        </>
    );

}