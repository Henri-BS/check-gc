import axios from "axios";
import { DebtEditForm } from "components/Form/DebtForm";
import moment from "moment";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Debt, DebtProps } from "types/debt";
import { BASE_URL } from "utils/requests";

type DebtCardProps = {
    debt: Debt;
}

export function DebtCard({ debt }: DebtCardProps) {
    return (
        <Link to={`/debt/${debt.debtId}`}>
            <div className="card-md-container blur-container" >
                <div className="card-md-title">
                    {debt.clientName}
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
                        <p className="card-md-content">{debt.productAmount}</p>
                    </li>

                </ul>
            </div>
        </Link>
    );
}

export function DebtSmallCard({ debt }: DebtCardProps) {
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

export function DebtProfileCard({ debtId }: DebtProps) {

    const params = useParams();
    const navigate = useNavigate();

    const [debt, setDebt] = useState<Debt>();
    useEffect(() => {
        axios.get(`${BASE_URL}/debt/${debtId}`)
            .then((response) => {
                setDebt(response.data);
            });
    }, [debtId]);

    const deleteDebt = () => {
        axios.delete(`${BASE_URL}/debt/delete/${debtId}`)
            .then((response) => {
                navigate(`/debt-list`)
            })
    }

    const updateDebtForPaid = () => {
        axios.put(`${BASE_URL}/debt/update-for-paid/${debtId}`)
            .then((response) => {
                setDebt(response.data);
            });
        navigate(`/paid-list`)
    }
    return (
        <>
            <div className="sub-navbar">
                <Link to={`/debt-list`} className="sub-navbar-item">
                    <i className="fa fa-chevron-left" />
                </Link>
                <button className="btn btn-primary" data-bs-target="#debtEditModal" data-bs-toggle="modal">
                    <i className="fa fa-edit" /> Editar Compra
                </button>
                <button className="btn btn-danger" data-bs-target="#debtDeleteModal" data-bs-toggle="modal">
                    <i className="fa fa-trash" /> Deletar Compra
                </button>
            </div>
            <hr />
            <ul className="card-md-list">
                <li className="card-lg-item "> Cliente:
                    <p className="card-lg-content">{debt?.clientName}</p>
                </li>
                <li className="card-lg-item "> Data da Compra:
                    <p className="card-lg-content">{moment(debt?.debtDate).format("DD/MM/YYYY")}</p>
                </li>
                <li className=" card-lg-item">Devendo Há:
                    <p className="card-lg-content">{debt?.debtDays}</p>
                </li>
                <li className=" card-lg-item">Produto Solicitado:
                    <p className="card-lg-content">{debt?.productDescription}</p>
                </li>
                <li className=" card-lg-item">Quantidade do Produto:
                    <p className="card-lg-content">{debt?.productQuantity}</p>
                </li>
                <li className=" card-lg-item">Valor da Compra:
                    <p className="card-lg-content">{debt?.productAmount}</p>
                </li>

                <li className=" card-lg-item">
                    <button className="btn btn-primary" data-bs-target="#debtUpdatePaidModal" data-bs-toggle="modal">
                        <i className="fa fa-edit" /> Atualizar para Paga
                    </button>
                </li>
            </ul>


            <div className="modal fade" role={"dialog"} id={"debtEditModal"}>
                <div className="modal-dialog" role={"document"}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <label htmlFor="debtLabel" className="modal-title">Alterar dados da compra</label>
                            <button className="close" data-bs-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true"><i className="fa fa-times" /></span>
                            </button>
                        </div>
                        <div className="modal-body"><DebtEditForm debtId={`${params.debtId}`} /></div>
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
                            <button onClick={() => deleteDebt()} data-bs-dismiss="modal" className="btn btn-danger" >Deletar</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="debtUpdatePaidModal" role={"dialog"}>
                <div className="modal-dialog" role={"document"}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <label htmlFor="clientLabel" className="modal-title">Deseja atualizar a dívida pendente para paga ?</label>
                            <button className="close" data-bs-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true"><i className="fa fa-times" /></span>
                            </button>
                        </div>
                        <div className="modal-footer">
                            <button onClick={() => updateDebtForPaid()} data-bs-dismiss="modal" className="btn btn-primary" >Atualizar</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
