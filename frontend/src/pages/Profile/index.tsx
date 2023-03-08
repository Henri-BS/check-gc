import axios from "axios";
import { ClientProfileCard } from "components/Card";
import { ClientEditForm } from "components/Form";
import { DebtListByClient } from "pages/Listing";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Client, ClientProps } from "types/client";
import { BASE_URL } from "utils/requests";

export function DeleteClient({ clientId }: ClientProps) {

    const navigate = useNavigate();

    const[client, setClient] = useState<Client>();
    useEffect(() => {
        axios.get((`${BASE_URL}/client/${clientId}`))
        .then((response) => {
            setClient(response.data);
        })
    }, [clientId])

    const deleteClient = () => {
        axios.delete(`${BASE_URL}/client/delete/${clientId}`)
            .then((response) => {
                navigate("/client-list");
            }) 
    }

    return (
        <div className="modal-footer">
            <button onClick={() => deleteClient()} data-bs-dismiss="modal" className="btn btn-danger" >Deletar</button>
        </div>
    );
}

export function ClientProfile() {

    const params = useParams();

    return (
        <>
            <div className="container ">
                <div className="sub-navbar">
                    <Link to={"/client-list"} className="sub-navbar-item">
                        <h2><i className="fa fa-chevron-left" /></h2>
                    </Link>
                    <button className="btn btn-primary" data-bs-target="#clientEditModal" data-bs-toggle="modal">
                        <i className="fa fa-edit" /> Editar Cliente
                    </button>
                    <button className="btn btn-danger" data-bs-target="#clientDeleteModal" data-bs-toggle="modal">
                        <i className="fa fa-trash" /> Deletar Cliente
                    </button>
                </div>
                <hr />
                <ClientProfileCard clientId={`${params.clientId}`} />
                <hr />
                <DebtListByClient clientId={`${params.clientId}`} />
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
                        <div className="modal-body"><ClientEditForm clientId={`${params.clientId}`} /></div>
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
                        <DeleteClient clientId={`${params.clientId}`} />
                    </div>
                </div>
            </div>
        </>
    );
} 