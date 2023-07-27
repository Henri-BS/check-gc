import axios from "axios";
import { DebtCard, DebtSmallCard } from "components/Card/DebtCard";
import { DebtAddForm } from "components/Form/DebtForm";
import { Navbar } from "components/Navbar";
import Pagination from "components/Pagination";
import moment from "moment";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ClientProps } from "types/client";
import { DebtPage, Debt, DebtProps, DebtByDate } from "types/debt";
import { Props } from "types/page";
import { Product } from "types/product";
import { BASE_URL } from "utils/requests";

export function DebtList() {

    const [value, setValue] = useState("");
    const [pageNumber, setPageNumber] = useState(0);
    const handlePageChange = (newPageNumber: number) => {
        setPageNumber(newPageNumber);
    }

    const [debtList, setDebtList] = useState<DebtPage>({ content: [], number: 0 });
    useEffect(() => {
        axios.get(`${BASE_URL}/debt/list?product=${value}&page=${pageNumber}`)
            .then((response) => {
                setDebtList(response.data);
            });
    }, [value, pageNumber]);

    return (
        <>
            <div className="container">

                <div className="pagination-container row">
                    <div className="col-12 col-md-4 col-xl-3 mb-2" data-bs-target="#addDebtModal" data-bs-toggle="modal">
                        <button className="btn btn-confirm"><i className="fa fa-save" /> Adicionar Compra</button>
                    </div>
                    <div className="col-12 col-md-4 col-xl-6 mb-2" >
                        <Pagination page={debtList} onPageChange={handlePageChange} />
                    </div>
                    <div className="col-12 col-md-4 col-xl-3 mb-2" >
                        <div className="form-group">
                            <input id="value" type="text" value={value}
                                onChange={(e) => setValue(e.target.value)}
                                className="form-control" placeholder="busque dívidas pelos produtos..."
                            />
                        </div>
                    </div>
                </div>

                <div className="row">
                    {debtList.content?.filter((x) => (
                        x.productDescription.toUpperCase().includes(value.toLocaleUpperCase()))
                        ).map(x => (
                        <div key={x.debtId} className="col-12 col-md-6 col-xl-4 mb-3">
                            <DebtCard debt={x} />
                        </div>
                    ))}
                </div>
            </div>

            <div className="modal fade" id="addDebtModal" role={"dialog"}>
                <div className="modal-dialog" role={"document"}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <label htmlFor="clientLabel" className="modal-title">Adicionar um novo cliente</label>
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
export function DebtTableByClient({ id: clientId }: Props) {

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
                <h4><i className="fa fa-book"/> Dívidas Pendentes</h4>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Data do Dívida</th>   
                            <th>Produto</th>
                            <th>Quantidade de Produtos</th>
                            <th>Valor Total dos Produtos</th>
                        </tr>
                    </thead>

                    <tbody className="border-0">
                        {debtList?.map(x => (
                            <tr key={x.clientName}>
                                <td> {moment(x.debtDate).format("DD/MM/YYYY")} </td> 
                                <Link to={`/product/${x.product}`}><td>{x.productDescription}</td></Link>
                                <td>{x.productQuantity}</td>
                                <td>{x.productAmount.toFixed(2)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}
export function DebtTableByDate({id: clientId }: Props) {

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
                <h4><i className="fa fa-book"/> Total de Dívidas Pendentes por Data</h4>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Data da Dívida</th>   
                            <th>Quantidade Total de Unidades de Produtos</th>
                            <th>Valor Total dos Produtos</th>
                        </tr>
                    </thead>

                    <tbody className="border-0">
                        {debtList?.map(x => (
                            <tr key={x.clientName}>
                                <td> {moment(x.debtDate).format("DD/MM/YYYY")} </td> 
                                <td>{x.productQuantity}</td>
                                <td>{x.productAmount.toFixed(2)}</td>
                            </tr>
                        ))}
                    </tbody>
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

    const [debtPage, setDebtPage] = useState<Debt[]>();
    useEffect(() => {
        axios.get(`${BASE_URL}/debt/list-by-date/${debt?.debtDate}`)
            .then((response) => {
                setDebtPage(response.data);
            })
    }, [debt?.debtDate]);

    return (
        <>
            <div className="homelist-title">
                <p><i className="fa fa-book" /> Dívidas feitas em: {moment(debt?.debtDate).format("DD/MM/YYYY")}</p>
            </div>
            <div className="horizontal-list-container ">
                {debtPage?.map((x) => (
                    <div key={x.debtId} className="horizontal-list-item">
                        <DebtSmallCard debt={x} />
                    </div>
                ))}
            </div>
        </>
    );
}

