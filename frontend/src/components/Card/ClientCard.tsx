import moment from "moment";
import { Link } from "react-router-dom";
import { ClientProps } from "types/client";

export function ClientCard({ client }: ClientProps) {

    return (
        <>
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
                        <p className="card-md-content">{moment(client.account.lastModifiedDate).format("DD/MM/YYYY")}</p>
                        </li>
                    </ul>
                </div>
            </Link>
        </>
    );
}


