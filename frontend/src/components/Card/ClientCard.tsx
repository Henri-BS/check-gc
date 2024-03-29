import axios from "axios";
import moment from "moment";
import { ClientEditForm } from "components/Form/ClientForm";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Client, ClientProps } from "types/client";
import { BASE_URL } from "utils/requests";
import { Props } from "types/page";

export function ClientCard({ client }: ClientProps) {

    const params = useParams();

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

            <div className="modal fade" id="optionModal" role={"dialog"}>
                <div className="modal-dialog" role={"document"}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <label htmlFor="clientLabel" className="modal-title">Menu de opções </label>
                            <button className="close" data-bs-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true"><i className="fa fa-times" /></span>
                            </button>
                        </div>
                        <hr />
                        <ul className="modal-body md-card-list">
                            <li className="card-md-content link-option" data-bs-target="#clientEditModal" data-bs-toggle="modal">
                                <i className="fa fa-edit" /> Editar Cliente
                            </li>

                            <li className="card-md-content link-option">
                                <i className="fa fa-trash" /> Deletar Cliente
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

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
        </>
    );
}

export function ClientProfileCard({id: clientId }: Props) {

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
