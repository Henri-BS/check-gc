import axios from "axios";
import { ClientCard } from "components/Card/ClientCard";
import { ClientAddForm } from "components/Form/ClientForm";
import { Navbar } from "components/Navbar";
import Pagination from "components/Pagination";
import { useEffect, useState } from "react";
import { ClientPage } from "types/client";
import { BASE_URL } from "utils/requests";
import "./styles.css"

export function ClientList() {

    const[value, setValue] = useState("");
    const [pageNumber, setPageNumber] = useState(0);
    const handlePageChange = (newPageNumber: number) => {
        setPageNumber(newPageNumber);
    }

    const [clientList, setClientList] = useState<ClientPage>({
        content: [],
        number: 0
    });
    useEffect(() => {
        axios.get(`${BASE_URL}/client/list?page=${pageNumber}&name=${value}`)
            .then((response) => {
                setClientList(response.data);
            });
    }, [pageNumber, value]);

    return (
        <>
            <div className="container">

                <nav className="pagination-container row">
                    <div className="col-12 col-md-4 col-xl-3 mb-2" data-bs-target="#addClientModal" data-bs-toggle="modal">
                        <button className="btn btn-confirm"><i className="fa fa-save" /> Adicionar Cliente</button>
                    </div>
                    <div className="col-12 col-md-4 col-xl-6 mb-2" ><Pagination page={clientList} onPageChange={handlePageChange} /></div>
                    <div className="col-12 col-md-4 col-xl-3 mb-2" >
                        <div className="form-group">
                            <input 
                            type="text" 
                            id="value"
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                            className="form-control"
                            placeholder="buscar clientes..."
                            />
                        </div>
                    </div>
                </nav>
                <div className="row">
                    {clientList.content?.filter((x) =>
                    x.name.toUpperCase().includes(value.toLocaleUpperCase()))
                    .map(x => (
                        <div key={x.clientId} className="col-12 col-md-6 col-xl-4 mb-3">
                            <ClientCard client={x} />
                        </div>
                    ))}
                </div>
            </div>
            <div className="modal fade" id="addClientModal" role={"dialog"}>
                <div className="modal-dialog" role={"document"}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <label htmlFor="clientLabel" className="modal-title">Adicionar um novo cliente</label>
                            <button className="close" data-bs-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true"><i className="fa fa-times" /></span>
                            </button>
                        </div>
                        <div className="modal-body"><ClientAddForm /></div>
                    </div>
                </div>
            </div>
        </>
    );
}




