import { Client, ClientAccount } from "types/client";
import "./styles.css"

type Props = {
    client: Client;
    account: ClientAccount;
}

export function ClientCard({ client, account }: Props) {
    return (
        <div className="card-md-container">
            <div className="card-md-title">
                <i className="fa fa-user" /> {client.name}
            </div>
            <ul className="card-md-list">
                <li className="card-md-item">{client.address}</li>
                <li className="card-md-item">{client.phoneNumber}</li>
                <li className="card-md-item">{account.debtAmount}</li>
                <li className="card-md-item">{account.debtQuantity}</li>
                <li className="card-md-item">{account.lastModifiedDate}</li>
            </ul>
        </div>
    );
}