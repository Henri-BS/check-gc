import axios from "axios";
import { ClientCard } from "components/Card";
import { Navbar } from "components/Navbar";
import { useEffect, useState } from "react";
import { ClientPage } from "types/client";
import { BASE_URL } from "utils/requests";

export function ClientList() {

    const [clientList, setClientList] = useState<ClientPage>({
        content: [],
        number: 0
    });
    useEffect(() => {
        axios.get(`${BASE_URL}/client/list`)
            .then((response) => {
                setClientList(response.data);
            });
    }, []);

    return (
        <>
        <Navbar/>
        <div className="container">
            <div className="row">
            {clientList.content?.map(x => (
                <div key={x.clientId} className="col-sm-12 col-lg-6 col-xl-4 mb-3">
                    <ClientCard client={x}  />
                </div>
            ))}
            </div>
        </div>
        </>
    );
}