import { Client } from "types/client";
import "./styles.css"

type Props = {
    client: Client;
}

export function ClientCard({ client }: Props) {
    return (
        <div className="card-md-container">
            <div className="card-md-title">
                <i className="fa fa-user" /> {client.name}
            </div>
            <ul className="card-md-list">
                <li className="card-md-item card-md-content">{client.address}</li>
                <li className="card-md-item card-md-content">{client.phoneNumber}</li>
                <li className="card-md-item card-md-content">{client.account.debtAmount}</li>
                <li className="card-md-item card-md-content">{client.account.debtQuantity}</li>
                <li className="card-md-item card-md-content">{client.account.lastModifiedDate}</li>
                
            </ul>
        </div>
    );
}