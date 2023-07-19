import axios from "axios";
import { PaidCard, PaidSmallCard } from "components/Card/PaidCard";
import { PaidAddForm } from "components/Form/PaidForm";
import { Navbar } from "components/Navbar";
import Pagination from "components/Pagination";
import { useState, useEffect } from "react";
import { ClientProps } from "types/client";
import { PaidPage, Paid, PaidProps } from "types/paid";
import { BASE_URL } from "utils/requests";

export function PaidList() {
    const [pageNumber, setPageNumber] = useState(0);
    const handlePageChange = (newPageNumber: number) => {
        setPageNumber(newPageNumber);
    }

    const [paidPage, setPaidPaid] = useState<PaidPage>({
        content: [],
        number: 0
    });

    useEffect(() => {
        axios.get(`${BASE_URL}/paid/list?page=${pageNumber}`)
            .then((response) => {
                setPaidPaid(response.data);
            });
    }, [pageNumber])


    return (
        <>
            <Navbar />
            <div className="container">

                <nav className="pagination-container">
                    <div className="col-12 col-md-4 col-xl-3 mb-2" data-bs-target="#addPaidModal" data-bs-toggle="modal">
                        <button className="btn btn-confirm"><i className="fa fa-save" /> Adicionar Pagamento</button>
                    </div>
                    <div className="col-12 col-md-4 col-xl-6 mb-2" >
                        <Pagination page={paidPage} onPageChange={handlePageChange} />
                    </div>
                    <div className="col-12 col-md-4 col-xl-3 mb-2" >Compras Pagas: {paidPage.totalElements}</div>
                </nav>

                <div className="row">
                    {paidPage.content.map(x => (
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

export function PaidListByClient({ clientId }: ClientProps) {

    const [paidList, setPaidList] = useState<Paid[]>();
    useEffect(() => {
        axios.get(`${BASE_URL}/paid/list-client/${clientId}`)
            .then((response) => {
                setPaidList(response.data);
            })
    }, [clientId]);

    return (
        <>
            <div className="homelist-title">
                <div><i className="fa fa-bookmark" /> Dívidas Pagas</div>
            </div>
            <div className="horizontal-list-container">
                {paidList?.map((x) => (
                    <div key={x.paidId} className="horizontal-list-item">
                        <PaidSmallCard paid={x} />
                    </div>
                ))}
            </div>
        </>
    );
}

export function PaidListByDate({ paidId }: PaidProps) {

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