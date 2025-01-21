import axios from "axios";
import { DebtCard, DebtSmallCard } from "components/Card/DebtCard";
import { DebtAddForm } from "components/Form/DebtForm";
import Pagination from "components/Pagination";
import { DebtMockList, DebtMockListByClient, DebtMockGroupByDate } from "mock/MockList";
import moment from "moment";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { DebtPage, Debt } from "types/debt";
import { Props } from "types/page";
import { BASE_URL } from "utils/requests";

export function DebtList() {

    const [value, setValue] = useState("");
    const [pageNumber, setPageNumber] = useState(0);
    const handlePageChange = (newPageNumber: number) => {
        setPageNumber(newPageNumber);
    }

    const [debtList, setDebtList] = useState<DebtPage>({ content: [], number: 0 });
    useEffect(() => {
        axios.get(`${BASE_URL}/debt/list?product=${value}&client=${value}&page=${pageNumber}&size=9`)
            .then((response) => {
                setDebtList(response.data);
            });
    }, [value, pageNumber]);

    return (
        <>
            {!debtList.content.length ? <DebtMockList /> :
                <div className="container">
                    <div className="pagination-container row">
                        <div className="col-12 col-md-4 col-xl-3 mb-2" data-bs-target="#addDebtModal" data-bs-toggle="modal">
                            <button className="btn btn-confirm"><i className="fa fa-save" /> Adicionar Dívida</button>
                        </div>
                        <div className="col-12 col-md-4 col-xl-6 mb-2" >
                            <Pagination page={debtList} onPageChange={handlePageChange} />
                        </div>
                        <div className="col-12 col-md-4 col-xl-3 mb-2" >
                            <div className="form-group">
                                <input type="text"
                                    id="value"
                                    value={value}
                                    onChange={(e) => setValue(e.target.value)}
                                    className="form-control"
                                    placeholder="buscar por datas, descrições, nomes..."
                                />
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        {debtList.content?.filter((x) => (
                            x.productDescription.toUpperCase().includes(value.toLocaleUpperCase()) ||
                            x.clientName.toUpperCase().includes(value.toLocaleUpperCase()))
                        ).map(x => (
                            <div key={x.debtId} className="col-12 col-md-6 col-xl-4 mb-3">
                                <DebtCard debt={x} />
                            </div>
                        ))}
                    </div>
                </div>
            }
            <div className="modal fade" id="addDebtModal" role={"dialog"}>
                <div className="modal-dialog" role={"document"}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <label htmlFor="clientLabel" className="modal-title">Adicionar dívida</label>
                            <button className="close" data-bs-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true"><i className="fa fa-times" /></span>
                            </button>
                        </div>
                        <div className="modal-body"><DebtAddForm /></div>
                    </div>
                </div>
            </div>

        </>
    );
}

export function DebtListByClient({ id: clientId }: Props) {

    const params = useParams();

    const [debtList, setDebtList] = useState<Debt[]>();
    useEffect(() => {
        axios.get(`${BASE_URL}/debt/list-by-client/${clientId}`)
            .then((response) => {
                setDebtList(response.data);
            });
    }, [clientId]);

    return (
        <>
            <div className="table-responsive">
                <h4><i className="fa fa-book" /> Dívidas Pendentes</h4>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Data do Dívida</th>
                            <th>Produto</th>
                            <th>Quantidade de Produtos</th>
                            <th>Valor Total dos Produtos</th>
                        </tr>
                    </thead>

                    {!debtList?.length ? <DebtMockListByClient id={`${params.clientId}`} /> :
                        <tbody className="border-0">
                            {debtList?.map(debt => (
                                <tr key={debt.clientName}>
                                    <td> {moment(debt.debtDate).format("DD/MM/YYYY")} </td>
                                    <Link to={`/product/${debt.product}`}><td>{debt.productDescription}</td></Link>
                                    <td>{debt.productQuantity}</td>
                                    <td>{debt.productAmount.toFixed(2)}</td>
                                </tr>
                            ))}
                        </tbody>
                    }
                </table>
            </div>
        </>
    );
}

export function DebtGroupByDate({ id: clientId }: Props) {

    const params = useParams();

    const [debtList, setDebtList] = useState<Debt[]>();
    useEffect(() => {
        axios.get(`${BASE_URL}/debt/group-by-date/${clientId}`)
            .then((response) => {
                setDebtList(response.data);
            })
    }, [clientId]);

    return (
        <>
            <div className="table-responsive">
                <h4><i className="fa fa-book" /> Total de Dívidas Pendentes por Data</h4>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Data da Dívida</th>
                            <th>Quantidade Total de Unidades de Produtos</th>
                            <th>Valor Total dos Produtos</th>
                        </tr>
                    </thead>

                    {!debtList?.length ? <DebtMockGroupByDate id={`${params.clientId}`} /> :
                        <tbody className="border-0">
                            {debtList?.map(debt => (
                                <tr key={debt.clientName}>
                                    <td> {moment(debt.debtDate).format("DD/MM/YYYY")} </td>
                                    <td>{debt.productQuantity}</td>
                                    <td>{debt.productAmount.toFixed(2)}</td>
                                </tr>
                            ))}
                        </tbody>
                    }
                </table>
            </div>
        </>
    );
}

export function DebtListByDate({ id: debtId }: Props) {

    const [debt, setDebt] = useState<Debt>();
    useEffect(() => {
        axios.get(`${BASE_URL}/debt/${debtId}`)
            .then((response) => {
                setDebt(response.data);
            });
    }, [debtId]);

    const [debtList, setDebtList] = useState<Debt[]>();
    useEffect(() => {
        axios.get(`${BASE_URL}/debt/list-by-date/${debt?.debtDate}`)
            .then((response) => {
                setDebtList(response.data);
            })
    }, [debt?.debtDate]);

    return (
        <>
            {!debtList?.length ? "" :
                <div>
                    <div className="homelist-title">
                        <p><i className="fa fa-book" /> Dívidas feitas em: {moment(debt?.debtDate).format("DD/MM/YYYY")}</p>
                    </div>

                    <div className="horizontal-list-container ">
                        {debtList?.map((debt) => (
                            <div key={debt.debtId} className="horizontal-list-item">
                                <DebtSmallCard debt={debt} />
                            </div>
                        ))}
                    </div>
                </div>
            }
        </>
    );
}