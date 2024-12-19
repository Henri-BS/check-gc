import { Link } from "react-router-dom";
import { clientMock, debtGroupByDateMock, debtMock, paidGroupByDateMock, paidMock, productMock } from "./MockData";
import { Props } from "types/page";
import { useState } from "react";

export function ClientMockList() {
    const [value, setValue] = useState("");

    const filter = () => {
        return clientMock.filter(item => item.name.toUpperCase().includes(value.toLocaleUpperCase()));
    };

    const result = filter();

    return (
        <>
            <div className="container">
                <div className="pagination-container row">
                    <div className="col-12 col-md-4 col-xl-3 mb-2" data-bs-target="#addClientModal" data-bs-toggle="modal">
                        <button className="btn btn-confirm"><i className="fa fa-save" /> Adicionar Cliente</button>
                    </div>
                    <div className="col-12 col-md-4 col-xl-6 mb-2" >

                    </div>
                    <div className="col-12 col-md-4 col-xl-3 mb-2 d-flex justify-content-center" >
                        <div className="form-group">
                            <input type="text"
                                id="value"
                                value={value}
                                onChange={(e) => setValue(e.target.value)}
                                className="form-control"
                                placeholder="buscar por datas, descrições, nomes..."
                            />
                        </div>
                    </div>
                </div>
                <div className="row">
                    {result.map((client, index) => {
                        return (
                            <div key={index} className="col-12 col-md-6 col-xl-4 mb-3">
                                <Link to={`/client/${client.clientId}`} >
                                    <div className="card-md-container blur-container">
                                        <nav className="card-md-title">
                                            {client.name}
                                        </nav>
                                        <ul className="card-md-list">
                                            <li className="card-md-item ">Endereço:
                                                <p className="card-md-content">{client.address}</p>
                                            </li>
                                            <li className="card-md-item ">Contato:
                                                <p className="card-md-content">{client.phoneNumber}</p>
                                            </li>
                                            <li className="card-md-item">Última Atualização:
                                                <p className="card-md-content">{client.account.lastModifiedDate}</p>
                                            </li>
                                        </ul>
                                    </div>
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    );
}

export function DebtMockList() {
    const [value, setValue] = useState("");

    const filter = () => {
        return debtMock.filter(item =>
            item.clientName.toUpperCase().includes(value.toLocaleUpperCase()) ||
            item.productDescription.toUpperCase().includes(value.toLocaleUpperCase()) ||
            item.debtDate.toUpperCase().includes(value.toLocaleUpperCase())
        );
    };

    const result = filter();

    return (
        <>
            <div className="container">
                <div className="pagination-container row">
                    <div className="col-12 col-md-4 col-xl-3 mb-2" data-bs-target="#addDebtModal" data-bs-toggle="modal">
                        <button className="btn btn-confirm"><i className="fa fa-save" /> Adicionar Dívida</button>
                    </div>
                    <div className="col-12 col-md-4 col-xl-6 mb-2" >

                    </div>
                    <div className="col-12 col-md-4 col-xl-3 mb-2" >
                        <div className="form-group">
                            <input type="text"
                                id="value"
                                value={value}
                                onChange={(e) => setValue(e.target.value)}
                                className="form-control"
                                placeholder="buscar por datas, descrições, nomes..."
                            />
                        </div>
                    </div>
                </div>
                <div className="row">
                    {result.map((debt, index) => {
                        return (
                            <div key={index} className="col-12 col-md-6 col-xl-4 mb-3">
                                <Link to={`/debt/${debt.debtId}`}>
                                    <div className="card-md-container blur-container" >
                                        <div className="card-md-title">
                                            Cliente: {debt.clientName}
                                        </div>
                                        <ul className="card-md-list">
                                            <li className="card-md-item ">Data da Compra:
                                                <p className="card-md-content">{debt.debtDate}</p>
                                            </li>
                                            <li className="card-md-item ">Produto Solicitado:
                                                <p className="card-md-content">{debt.productDescription}</p>
                                            </li>
                                            <li className="card-md-item ">Quantidade do Produto:
                                                <p className="card-md-content">{debt.productQuantity}</p>
                                            </li>
                                            <li className="card-md-item ">Valor da Compra:
                                                <p className="card-md-content">R$ {debt.productAmount.toFixed(2)}</p>
                                            </li>
                                        </ul>
                                    </div>
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    );
}

export function PaidMockList() {

    const [value, setValue] = useState("");

    const filter = () => {
        return paidMock.filter(item =>
            item.clientName.toUpperCase().includes(value.toLocaleUpperCase()) ||
            item.productDescription.toUpperCase().includes(value.toLocaleUpperCase()) ||
            item.paymentDate.toUpperCase().includes(value.toLocaleUpperCase()) ||
            item.paymentType.toUpperCase().includes(value.toLocaleUpperCase())
        );
    };

    const result = filter();

    return (
        <>
            <div className="container">
                <div className="pagination-container row">
                    <div className="col-12 col-md-4 col-xl-3 mb-2" data-bs-target="#addPaidModal" data-bs-toggle="modal">
                        <button className="btn btn-confirm"><i className="fa fa-save" /> Adicionar Pagamento</button>
                    </div>
                    <div className="col-12 col-md-4 col-xl-6 mb-2" >

                    </div>
                    <div className="col-12 col-md-4 col-xl-3 mb-2" >
                        <div className="form-group">
                            <input type="text"
                                id="value"
                                value={value}
                                onChange={(e) => setValue(e.target.value)}
                                className="form-control"
                                placeholder="buscar por datas, descrições, nomes..."
                            />
                        </div>
                    </div>
                </div>
                <div className="row">
                    {result.map((paid, index) => {
                        return (
                            <div key={index} className="col-12 col-md-6 col-xl-4 mb-3">
                                <Link to={`/paid/${paid.paidId}`}>
                                    <div className="card-md-container blur-container">
                                        <div className="card-md-title">
                                            Cliente: {paid.clientName}
                                        </div>
                                        <ul className="card-md-list">
                                            <li className="card-md-item"> Data do Pagamento:
                                                <p className="card-md-content">{paid.paymentDate}</p>
                                            </li>
                                            <li className="card-md-item"> Tipo de Pagamento:
                                                <p className="card-md-content">{paid.paymentType}</p>
                                            </li>
                                            <li className="card-md-item"> Produto Comprado:
                                                <p className="card-md-content">{paid.productDescription}</p>
                                            </li>
                                            <li className="card-md-item"> Quantidade:
                                                <p className="card-md-content">{paid.productQuantity}</p>
                                            </li>
                                            <li className="card-md-item"> Valor da Compra:
                                                <p className="card-md-content">{paid.productAmount.toFixed(2)}</p>
                                            </li>
                                        </ul>
                                    </div>
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    );
}

export function ProductMockList() {
    const [value, setValue] = useState("");

    const filter = () => {
        return productMock.filter(item => item.description.toUpperCase().includes(value.toLocaleUpperCase()));
    };

    const result = filter();

    return (
        <>
            <div className="container">
                <div className="pagination-container row">
                    <div className="col-12 col-md-4 col-xl-3 mb-2" data-bs-target="#addProductModal" data-bs-toggle="modal">
                        <button className="btn btn-confirm"><i className="fa fa-save" /> Adicionar Produto</button>
                    </div>
                    <div className="col-12 col-md-4 col-xl-6 mb-2" >

                    </div>
                    <div className="col-12 col-md-4 col-xl-3 mb-2" >
                        <div className="form-group">
                            <input id="value" type="text" value={value}
                                onChange={(e) => setValue(e.target.value)}
                                className="form-control" placeholder="buscar por datas, descrições, nomes..."
                            />
                        </div>
                    </div>
                </div>
                <div className="row">
                    {result.map((product, index) => {
                        return (
                            <div key={index} className="col-12 col-md-6 col-xl-4 mb-3">
                                <Link to={`/product/${product.productId}`}>
                                    <div className="card-md-container blur-container">
                                        <div className="card-md-title">
                                            <li>{product.description}</li>
                                        </div>
                                        <div className="card-md-item "> Preço:
                                            <p className="card-md-content">{product.price.toFixed(2)}</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    );
}

export function ClientMockHomeList() {
    return (
        <>
            {clientMock.map((client, index) => {
                clientMock.length = 10
                return (
                    <div key={index}>
                        <Link to={`/client/${client.clientId}`} className="text-decoration-none">
                            <ul className="homelist-item" key={client.clientId}>
                                <li className="homelist-content">{client.name}</li>
                                <li className="homelist-content">Endereço: {client.address}</li>
                            </ul>
                        </Link>
                    </div>
                )
            })
            }
        </>
    )
}

export function DebtMockHomeList() {
    return (
        <>
            {debtMock.map((debt, index) => {
                debtMock.length = 10;
                return (
                    <div key={index}>
                        <Link to={`/debt/${debt.debtId}`} className="text-decoration-none">
                            <ul className="homelist-item" >
                                <li className="homelist-content">Produto: {debt.productDescription} ({debt.productQuantity} unidades)</li>
                                <li className="homelist-content">Data da Compra: {debt.debtDate}</li>
                            </ul>
                        </Link>
                    </div>
                )
            })
            }
        </>
    )
}

export function PaidMockHomeList() {
    return (
        <>
            {paidMock.map((paid, index) => {
                paidMock.length = 10
                return (
                    <div key={index}>
                        <Link to={`/paid/${paid.paidId}`} className="text-decoration-none">
                            <ul className="homelist-item" >
                                <li className="homelist-content">Produto: {paid.productDescription} ({paid.productQuantity} unidades)</li>
                                <li className="homelist-content">Data do Pagamento: {paid.paymentDate}</li>
                            </ul>
                        </Link>
                    </div>
                )
            })
            }
        </>
    )
}

export function ProductMockHomeList() {
    return (
        <>
            {productMock.map((product, index) => {
                productMock.length = 10
                return (
                    <div key={index}>
                        <Link to={`/product/${product.productId}`} className="text-decoration-none">
                            <ul className="homelist-item">
                                <li className="homelist-content">Produto: {product.description}</li>
                                <li className="homelist-content">Preço: {product.price.toFixed(2)}</li>
                            </ul>
                        </Link>
                    </div>
                )
            })
            }
        </>
    )
}

export function DebtMockListByClient({ id: clientId }: Props) {
    const filter = (id: any) => {
        return debtMock.filter(item => item.clientId.toString() === id);
    };

    const result = filter(clientId);
    return (
        <>
            <tbody className="border-0">
                {result?.map((debt, index) => {
                    return (
                        <tr key={index}>
                            <td>{debt.debtDate}</td>
                            <Link to={`/product/${debt.productId}`}>
                                <td>{debt.productDescription}</td>
                            </Link>
                            <td>{debt.productQuantity}</td>
                            <td>{debt.productAmount.toFixed(2)}</td>
                        </tr>
                    )
                })}
            </tbody>
        </>
    )
}

export function DebtMockGroupByDate({ id: clientId }: Props) {
    const filter = (id: any) => {
        return debtGroupByDateMock.filter(item => item.clientId.toString() === id);
    };

    const result = filter(clientId);
    return (
        <>
            <tbody className="border-0">
                {result?.map((debt, index) => {
                    return (
                        <tr key={index}>
                            <td>{debt.debtDate}</td>
                            <td>{debt.productQuantity}</td>
                            <td>{debt.productAmount.toFixed(2)}</td>
                        </tr>
                    )
                })}
            </tbody>
        </>
    )
}

export function PaidMockListByClient({ id: clientId }: Props) {
    const filter = (id: any) => {
        return paidMock.filter(item => item.clientId.toString() === id);
    };

    const result = filter(clientId);
    return (
        <>
            <tbody className="border-0">
                {result?.map((paid, index) => {
                    return (
                        <tr key={index}>
                            <td>{paid.paymentDate}</td>
                            <Link to={`/product/${paid.productId}`}>
                                <td>{paid.productDescription}</td>
                            </Link>
                            <td>{paid.productQuantity}</td>
                            <td>{paid.productAmount.toFixed(2)}</td>
                        </tr>
                    )
                })}
            </tbody>
        </>
    )
}

export function PaidMockGroupByDate({ id: clientId }: Props) {
    const filter = (id: any) => {
        return paidGroupByDateMock.filter(item => item.clientId.toString() === id);
    };

    const result = filter(clientId);
    return (
        <>
            <tbody className="border-0">
                {result?.map((paid, index) => {
                    return (
                        <tr key={index}>
                            <td>{paid.paymentDate}</td>
                            <td>{paid.productQuantity}</td>
                            <td>{paid.productAmount.toFixed(2)}</td>
                        </tr>
                    )
                })}
            </tbody>
        </>
    )
}

