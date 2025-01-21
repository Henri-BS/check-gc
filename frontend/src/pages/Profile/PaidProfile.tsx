import axios from "axios";
import { PaidEditForm } from "components/Form/PaidForm";
import { PaidMockProfile } from "mock/MockProfile";
import moment from "moment";
import { PaidListByDate } from "pages/Listing/PaidListing";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Props } from "types/page";
import { Paid } from "types/paid";
import { BASE_URL } from "utils/requests";

export function PaidProfile() {

    const params = useParams();
    return (
        <div className="container">
            <PaidProfileInfo id={`${params.paidId}`} />
            <hr />
            <PaidListByDate id={`${params.paidId}`} />
        </div>
    )
}

export function PaidProfileInfo({ id: paidId }: Props) {

    const navigate = useNavigate();
    const params = useParams();
    const [paid, setPaid] = useState<Paid>();

    useEffect(() => {
        axios.get(`${BASE_URL}/paid/${paidId}`)
            .then((response) => {
                setPaid(response.data);
            });
    }, [paidId]);

    const deletePaid = () => {
        axios.delete(`${BASE_URL}/paid/delete/${paidId}`)
            .then((response) => {
                navigate(`/paid-list`);
            })
    }

    return (
        <>
            <div className="sub-navbar">
                <button className="btn btn-primary" data-bs-target="#paidEditModal" data-bs-toggle="modal">
                    <i className="fa fa-edit" /> Editar
                </button>
                <button className="btn btn-danger" data-bs-target="#paidDeleteModal" data-bs-toggle="modal">
                    <i className="fa fa-trash" /> Deletar
                </button>
            </div>
            <hr />

            {!paid ? <PaidMockProfile id={`${params.paidId}`} /> :
                <ul className="card-md-list">
                    
                    <li className=" card-lg-item">Cliente:
                        <p className="card-lg-content">{paid?.clientName}</p>
                    </li>
                    <li className="card-lg-item "> Data do Pagamento:
                        <p className="card-lg-content">{moment(paid?.paymentDate).format("DD/MM/YYYY")}</p>
                    </li>
                    <li className=" card-lg-item">Produto Solicitado:
                        <p className="card-lg-content">{paid?.productDescription}</p>
                    </li>
                    <li className=" card-lg-item">Quantidade do Produto:
                        <p className="card-lg-content">{paid?.productQuantity}</p>
                    </li>
                    <li className=" card-lg-item">Valor Total:
                        <p className="card-lg-content">{paid?.productAmount}</p>
                    </li>
                    <li className=" card-lg-item">Forma de Pagamento:
                        <p className="card-lg-content">{paid?.paymentType}</p>
                    </li>
                </ul>
            }

            <div className="modal fade" id="paidEditModal" role={"dialog"}>
                <div className="modal-dialog" role={"document"}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <label htmlFor="paid">Alterar informações do registro de pagamento</label>
                            <button className="close" data-bs-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true"><i className="fa fa-times" /></span>
                            </button>
                        </div>
                        <div className="modal-body"><PaidEditForm id={`${params.paidId}`} /></div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="debtDeleteModal" role={"dialog"}>
                <div className="modal-dialog" role={"document"}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <label htmlFor="clientLabel" className="modal-title">Deseja deletar o registro de pagamento ?</label>
                            <button className="close" data-bs-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true"><i className="fa fa-times" /></span>
                            </button>
                        </div>
                        <div className="modal-footer">
                            <button onClick={() => deletePaid()} data-bs-dismiss="modal" className="btn btn-danger" >Deletar</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}