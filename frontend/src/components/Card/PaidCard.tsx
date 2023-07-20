import axios from "axios";
import moment from "moment";
import { PaidEditForm } from "components/Form/PaidForm";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Paid, PaidProps } from "types/paid";
import { BASE_URL } from "utils/requests";
import "./styles.css"


type PaidCardProps = {
    paid: Paid
}

export function PaidCard({ paid }: PaidCardProps) {
    return (
        <Link to={`/paid/${paid.paidId}`}>
            <div className="card-md-container blur-container">
                <div className="card-md-title">
                    {paid.clientName}
                </div>
                <ul className="card-md-list">
                    <li className="card-md-item"> Data do Pagamento:
                        <p className="card-md-content">{moment(paid.paymentDate).format("DD/MM/YYYY")}</p>
                    </li>
                    <li className="card-md-item"> Tipo de Pagamento:
                        <p className="card-md-content">{paid.paymentType}</p>
                    </li>
                    <li className="card-md-item"> Produto Comprado:
                        <p className="card-md-content">{paid.productDescription}</p>
                    </li>
                    <li className="card-md-item"> Quantidade:
                        <p className="card-md-content">{paid.productQuantity}</p>
                    </li>
                    <li className="card-md-item"> Valor da Compra:
                        <p className="card-md-content">{paid.productAmount.toFixed(2)}</p>
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
                    Produto Solicitado: {paid.productDescription}
                </div>
                <li className="card-md-item">Data do Pagamento:
                    <p className="card-md-content">{moment(paid.paymentDate).format("DD/MM/YYYY")}</p>
                </li>
                <li className="card-md-item">Valor:
                    <p className="card-md-content">{paid.productAmount}</p>
                </li>
            </div>
        </Link>
    );
}

export function PaidProfileCard({ paidId }: PaidProps) {

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
                    <i className="fa fa-edit" /> Editar Compra
                </button>
                <button className="btn btn-danger" data-bs-target="#paidDeleteModal" data-bs-toggle="modal">
                    <i className="fa fa-trash" /> Deletar Compra
                </button>
            </div>
            <hr />
            <ul className="card-md-list">
                <li className="card-lg-item "> Data do Pagamento:
                    <p className="card-lg-content">{moment(paid?.paymentDate).format("DD/MM/YYYY")}</p>
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

            <div className="modal fade" id="paidEditModal" role={"dialog"}>
                <div className="modal-dialog" role={"document"}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <label htmlFor="paid">Alterar informações sobre a compra paga</label>
                            <button className="close" data-bs-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true"><i className="fa fa-times" /></span>
                            </button>
                        </div>
                        <div className="modal-body"><PaidEditForm paidId={`${params.paidId}`} /></div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="debtDeleteModal" role={"dialog"}>
                <div className="modal-dialog" role={"document"}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <label htmlFor="clientLabel" className="modal-title">Deseja deletar a compra ?</label>
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