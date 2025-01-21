import moment from "moment";
import { Link } from "react-router-dom";
import { Paid } from "types/paid";
import "./styles.css"


type PaidCardProps = {
    paid: Paid
}

export function PaidCard({ paid }: PaidCardProps) {
    return (
        <Link to={`/paid/${paid.paidId}`}>
            <div className="card-md-container blur-container">
                <div className="card-md-title">
                    Cliente: {paid.clientName}
                </div>
                <ul className="card-md-list">
                    <li className="card-md-item"> Data do Pagamento:
                        <p className="card-md-content">{moment(paid.paymentDate).format("DD/MM/YYYY")}</p>
                    </li>
                    <li className="card-md-item"> Tipo de Pagamento:
                        <p className="card-md-content">{paid.paymentType}</p>
                    </li>
                    <li className="card-md-item"> Produto Solicitado:
                        <p className="card-md-content">{paid.productDescription}</p>
                    </li>
                    <li className="card-md-item"> Quantidade do Produto:
                        <p className="card-md-content">{paid.productQuantity}</p>
                    </li>
                    <li className="card-md-item"> Valor Total:
                        <p className="card-md-content">R${paid.productAmount.toFixed(2)}</p>
                    </li>
                </ul>
            </div>
        </Link>
    );
}

export function PaidSmallCard({ paid }: PaidCardProps) {
    return (
        <Link to={`/paid/${paid.paidId}`}>
            <div className="card-md-container blur-container">
            <div className="card-md-title">
              Cliente: {paid.clientName}
                </div>
                <li className="card-md-item">Data do Pagamento:
                    <p className="card-md-content">{moment(paid.paymentDate).format("DD/MM/YYYY")}</p>
                </li>
                <li className="card-md-item">Valor:
                    <p className="card-md-content">R${paid.productAmount.toFixed(2)}</p>
                </li>
                <li className="card-md-item">Quantidade:
                    <p className="card-md-content">{paid.productQuantity}</p>
                </li>
            </div>
        </Link>
    );
}