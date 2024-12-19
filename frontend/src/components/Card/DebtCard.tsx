import moment from "moment";
import { Link } from "react-router-dom";
import { DebtProps } from "types/debt";


export function DebtCard({ debt }: DebtProps) {
    return (
        <Link to={`/debt/${debt.debtId}`}>
            <div className="card-md-container blur-container" >
                <div className="card-md-title">
                    Cliente: {debt.clientName}
                </div>
                <ul className="card-md-list">
                    <li className="card-md-item ">Data da Compra:
                        <p className="card-md-content">{moment(debt.debtDate).format("DD/MM/YYYY")}</p>
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
    );
}

export function DebtSmallCard({ debt }: DebtProps) {
    return (
        <Link to={`/debt/${debt.debtId}`} >
            <div className="card-md-container blur-container" >
                <div className="card-md-title">
                    Produto Solicitado: {debt.productDescription}
                </div>
                <ul className="card-md-list">
                    <li className="card-md-item">Data da Compra:
                        <p className="card-md-content">{moment(debt.debtDate).format("DD/MM/YYYY")}</p>
                    </li>
                    <li className="card-md-item">Valor:
                        <p className="card-md-content">{debt.productAmount}</p>
                    </li>
                </ul>
            </div>
        </Link>
    );
}
