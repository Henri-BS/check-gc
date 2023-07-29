import axios from "axios";
import { PaidCard, PaidSmallCard } from "components/Card/PaidCard";
import { PaidAddForm } from "components/Form/PaidForm";
import Pagination from "components/Pagination";
import moment from "moment";
import { useState, useEffect } from "react";
import { Props } from "types/page";
import { PaidPage, Paid } from "types/paid";
import { BASE_URL } from "utils/requests";

export function PaidList() {
    const [value, setValue] = useState("");
    const [pageNumber, setPageNumber] = useState(0);
    const handlePageChange = (newPageNumber: number) => {
        setPageNumber(newPageNumber);
    }

    const [paidList, setPaidList] = useState<PaidPage>({ content: [], number: 0 });
    useEffect(() => {
        axios.get(`${BASE_URL}/paid/list?product=${value}&client=${value}&page=${pageNumber}`)
            .then((response) => {
                setPaidList(response.data);
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
                        <Pagination page={paidList} onPageChange={handlePageChange} />
                    </div>
                    <div className="col-12 col-md-4 col-xl-3 mb-2" >
                        <div className="form-group">
                            <input id="value" type="text" value={value}
                                onChange={(e) => setValue(e.target.value)}
                                className="form-control" placeholder="busque dívidas pelos produtos, clientes..."
                            />
                        </div>
                    </div>
                </div>

                <div className="row">
                    {paidList.content?.filter((x) => (
                        x.productDescription.toUpperCase().includes(value.toLocaleUpperCase()) ||
                        x.clientName.toUpperCase().includes(value.toLocaleUpperCase()))
                        ).map(x => (
                        <div key={x.paidId} className="col-12 col-md-6 col-xl-4 mb-3">
                            <PaidCard paid={x} />
                        </div>
                    ))}
                </div>
            </div>

            <div className="modal fade" role={"dialog"} id="addPaidModal">
                <div className="modal-dialog" role={"document"}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <label htmlFor="paidLabel">Adicionar um nova compra paga: </label>
                            <button className="close" data-bs-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true"><i className="fa fa-times" /></span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <PaidAddForm />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export function PaidTableByDate({id: clientId }: Props) {

    const [paidList, setPaidList] = useState<Paid[]>();
    useEffect(() => {
        axios.get(`${BASE_URL}/paid/group-by-date/${clientId}`)
            .then((response) => {
                setPaidList(response.data);
            })
    }, [clientId]);

    return (
        <>
            <div className="table-responsive">
                <h4> <i className="fa fa-bookmark"/> Total das Dívidas Pagas por Data</h4>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Data do Pagamento</th>
                            <th>Quantidade Total de Unidades de Produtos</th>
                            <th>Valor Total dos Produtos</th>
                        </tr>
                    </thead>

                    <tbody className="border-0">
                        {paidList?.map(x => (
                            <tr key={x.clientName}>
                                <td> {moment(x.paymentDate).format("DD/MM/YYYY")} </td>
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

export function PaidListByDate({id: paidId }: Props) {

    const [paid, setPaid] = useState<Paid>();
    useEffect(() => {
        axios.get(`${BASE_URL}/paid/${paidId}`)
            .then((response) => {
                setPaid(response.data);
            });
    }, [paidId]);

    const [paidPage, setPaidPage] = useState<Paid[]>();
    useEffect(() => {
        axios.get(`${BASE_URL}/paid/list-by-date/${paid?.paymentDate}`)
            .then((response) => {
                setPaidPage(response.data);
            })
    }, [paid?.paymentDate]);

    return (
        <>
            <div className="home-title">
                <i className="fa fa-book" /> Dívidas pagas em: {paid?.paymentDate}
            </div>
            <div className="horizontal-list-container ">
                {paidPage?.map((x) => (
                    <div key={x.paidId} className="horizontal-list-item">
                        <PaidSmallCard paid={x} />
                    </div>
                ))}
            </div>
        </>
    );
}

export function PaidTableByClient({ id: clientId }: Props) {

    const [paidList, setPaidList] = useState<Paid[]>();
    useEffect(() => {
        axios.get(`${BASE_URL}/paid/list-client/${clientId}`)
            .then((response) => {
                setPaidList(response.data);
            });
    }, [clientId]);

    return (
        <>
            <div className="table-responsive">
                <h4> <i className="fa fa-bookmark"/> Dívidas Pagas</h4>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Data do Pagamento</th>
                            <th>Produto</th>
                            <th>Quantidade de Produtos</th>
                            <th>Valor Total dos Produtos</th>
                        </tr>
                    </thead>

                    <tbody className="border-0">
                        {paidList?.map(x => (
                            <tr key={x.clientName}>
                                <td> {moment(x.paymentDate).format("DD/MM/YYYY")} </td>
                                <td>{x.productDescription}</td>
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