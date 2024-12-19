
import { Props } from "types/page";
import { clientMock, debtMock, paidMock, productMock } from "./MockData";

export function ClientMockProfile({ id: clientId }: Props) {

    const filterById = (id: any) => {
        return clientMock.filter(item => item.clientId.toString() === id);
    };

    const result = filterById(clientId);

    return (
        <>
            {result.map((client, index) => {
                return (
                    <div key={index}>
                        <nav className="card-lg-container">
                            <li className="card-lg-item">Cliente:
                                <p className="card-lg-content">{client?.name}</p>
                            </li>
                            <li className="card-lg-item">Endereço:
                                <p className="card-lg-content">{client?.address}</p>
                            </li>
                            <li className="card-lg-item">Contato:
                                <p className="card-lg-content">{client?.phoneNumber}</p>
                            </li>
                            <li className="card-lg-item">Dívidas Pendentes:
                                <p className="card-lg-content">{client?.account.debtQuantity}</p>
                            </li>
                            <li className="card-lg-item">Valor Total das Compras Pendentes:
                                <p className="card-lg-content">R$ {client?.account.debtAmount}</p>
                            </li>
                            <li className="card-lg-item">Compras Pagas:
                                <p className="card-lg-content">{client?.account.paidQuantity}</p>
                            </li>
                            <li className="card-lg-item">Valor Total das Compras Pagas:
                                <p className="card-lg-content">R$ {client?.account.paidAmount.toFixed(2)}</p>
                            </li>
                            <li className="card-lg-item">Última Alteração:
                                <p className="card-lg-content">{client?.account.lastModifiedDate}</p>
                            </li>
                        </nav>
                    </div>
                )
            })}
        </>
    );
}

export function DebtMockProfile({ id: debtId }: Props) {

    const filterById = (id: any) => {
        return debtMock.filter(item => item.debtId.toString() === id);
    };

    const result = filterById(debtId);

    return (
        <>
            {result.map((debt, index) => {
                return (
                    <div key={index}>
                        <ul className="card-md-list">
                            <li className="card-lg-item "> Cliente:
                                <p className="card-lg-content">{debt?.clientName}</p>
                            </li>
                            <li className="card-lg-item "> Data da Compra:
                                <p className="card-lg-content">{debt?.debtDate}</p>
                            </li>
                            <li className=" card-lg-item">Devendo Há:
                                <p className="card-lg-content">{debt?.debtDays}</p>
                            </li>
                            <li className=" card-lg-item">Produto Solicitado:
                                <p className="card-lg-content">{debt?.productDescription}</p>
                            </li>
                            <li className=" card-lg-item">Quantidade do Produto:
                                <p className="card-lg-content">{debt?.productQuantity}</p>
                            </li>
                            <li className=" card-lg-item">Valor da Compra:
                                <p className="card-lg-content">R${debt?.productAmount.toFixed(2)}</p>
                            </li>
                        </ul>
                    </div>
                )
            })}
        </>
    );
}

export function PaidMockProfile({ id: paidId }: Props) {

    const filterById = (id: any) => {
        return paidMock.filter(item => item.paidId.toString() === id);
    };

    const result = filterById(paidId);

    return (
        <>
            {result.map((paid, index) => {
                return (
                    <div key={index}>
                        <ul className="card-md-list">
                            <li className="card-lg-item "> Data do Pagamento:
                                <p className="card-lg-content">{paid?.paymentDate}</p>
                            </li>
                            <li className=" card-lg-item">Produto Solicitado:
                                <p className="card-lg-content">{paid?.productDescription}</p>
                            </li>
                            <li className=" card-lg-item">Quantidade do Produto:
                                <p className="card-lg-content">{paid?.productQuantity}</p>
                            </li>
                            <li className=" card-lg-item">Valor da Compra:
                                <p className="card-lg-content">{paid?.productAmount}</p>
                            </li>
                            <li className=" card-lg-item">Forma de Pagamento:
                                <p className="card-lg-content">{paid?.paymentType}</p>
                            </li>
                        </ul>
                    </div>
                )
            })}
        </>
    );
}

export function ProductMockProfile({ id: productId }: Props) {

    const filterById = (id: any) => {
        return productMock.filter(item => item.productId.toString() === id);
    };

    const result = filterById(productId);

    return (
        <>
            {result.map((product, index) => {
                return (
                    <div key={index}>
                        <ul className="card-md-list">
                            <li className="card-lg-item "> Descrição:
                                <p className="card-lg-content">{product?.description}</p>
                            </li>
                            <li className=" card-lg-item">Preço:
                                <p className="card-lg-content">{product?.price}</p>
                            </li>
                        </ul>
                    </div>
                )
            })}
        </>
    );
}

export function ClientMockTotalValues (){
    return(
    <nav className="bar-container row">
                <div className="bar-item col-6">
                    <b>Valor das Dívidas Pendentes:</b> {499.6.toFixed(2)}
                </div>
                <div className="bar-item col-6">
                    <b>Valor das Dívidas Paga:</b> {307.5.toFixed(2)}
                </div>
                <div className="bar-item col-6">
                    <b>Quantidade de Dívidas Pendentes:</b> {17}
                </div>  <div className="bar-item col-6">
                    <b>Quantidade de Dívidas Pagas:</b> {20}
                </div>
                <div className="bar-item col-6">
                    <b>Maior Dívida Pendente:</b> {329.0.toFixed(2)}
                </div>
                <div className="bar-item col-6">
                    <b>Maior Dívida Paga:</b> {131.39.toFixed(2)}
                </div>
            </nav>
    )
}