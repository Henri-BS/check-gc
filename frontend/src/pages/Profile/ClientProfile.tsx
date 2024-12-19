import axios from "axios";
import { ClientEditForm } from "components/Form/ClientForm";
import { ClientMockProfile } from "mock/MockProfile";
import moment from "moment";
import { DebtListByClient, DebtGroupByDate } from "pages/Listing/DebtListing";
import { PaidListByClient, PaidGroupByDate } from "pages/Listing/PaidListing";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Client } from "types/client";
import { Props } from "types/page";
import { BASE_URL } from "utils/requests";

export function ClientProfile() {

    const params = useParams();

    return (
        <>
            <div className="container ">

                <ClientProfileInfo id={`${params.clientId}`} />
                <hr />
                <DebtListByClient id={`${params.clientId}`} />
                <DebtGroupByDate id={`${params.clientId}`} />
                <hr />
                <PaidListByClient id={`${params.clientId}`} />
                <PaidGroupByDate id={`${params.clientId}`} />

            </div>
        </>
    );
}

export function ClientProfileInfo({ id: clientId }: Props) {

    const navigate = useNavigate();
    const params = useParams();

    const [client, setClient] = useState<Client>();
    useEffect(() => {
        axios.get(`${BASE_URL}/client/${clientId}`)
            .then((response) => {
                setClient(response.data);
            })
    }, [clientId]);

    const deleteClient = () => {
        axios.delete(`${BASE_URL}/client/delete/${clientId}`)
            .then((response) => {
                navigate("/client-list");
            })
    }

    return (
        <>
            <div className="sub-navbar">
                <button className="btn btn-primary" data-bs-target="#clientEditModal" data-bs-toggle="modal">
                    <i className="fa fa-edit" /> Editar Cliente
                </button>
                <button className="btn btn-danger" data-bs-target="#clientDeleteModal" data-bs-toggle="modal">
                    <i className="fa fa-trash" /> Deletar Cliente
                </button>
            </div>
            <hr />

            {!client ? <ClientMockProfile id={`${params.clientId}`} /> :
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
                        <p className="card-lg-content">{moment(client?.account.lastModifiedDate).format("DD/MM/YYYY")}</p>
                    </li>
                </nav>
            }

            <div className="modal fade" id="clientEditModal" role={"dialog"}>
                <div className="modal-dialog" role={"document"}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <label htmlFor="clientLabel" className="modal-title">Editar cliente</label>
                            <button className="close" data-bs-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true"><i className="fa fa-times" /></span>
                            </button>
                        </div>
                        <div className="modal-body"><ClientEditForm id={`${params.clientId}`} /></div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="clientDeleteModal" role={"dialog"}>
                <div className="modal-dialog" role={"document"}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <label htmlFor="clientLabel" className="modal-title">Deseja deletar o cliente ?</label>
                            <button className="close" data-bs-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true"><i className="fa fa-times" /></span>
                            </button>
                        </div>
                        <div className="modal-footer">
                            <button onClick={() => deleteClient()} data-bs-dismiss="modal" className="btn btn-danger" >Deletar</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}