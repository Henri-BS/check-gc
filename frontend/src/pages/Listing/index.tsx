import axios from "axios";
import { ClientCard, DebtCard, ProductCard } from "components/Card";
import { Navbar } from "components/Navbar";
import { useEffect, useState } from "react";
import { ClientPage } from "types/client";
import { DebtPage } from "types/debt";
import { ProductPage } from "types/product";
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
            <Navbar />
            <div className="container">
                <div className="row">
                    {clientList.content?.map(x => (
                        <div key={x.clientId} className="col-12 col-md-6 col-xl-4 mb-3">
                            <ClientCard client={x} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export function DebtList() {

    const [debtList, setDebtList] = useState<DebtPage>({
        content: [],
        number: 0
    });
    useEffect(() => {
        axios.get(`${BASE_URL}/debt/list`)
            .then((response) => {
                setDebtList(response.data);
            });
    }, []);
    return (
        <>
            <Navbar />
            <div className="container">
                <div className="row">
                    {debtList.content.map(x => (
                        <div className="col-12 col-md-6 col-xl-4 mb-3">
                            <DebtCard debt={x} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export function ProductList() {

    const [productList, setProductList] = useState<ProductPage>({
        content: [],
        number: 0
    });
    useEffect(() => {
        axios.get(`${BASE_URL}/product/list`)
            .then((response) => {
                setProductList(response.data);
            });
    }, []);

    return (
        <>
            <Navbar />
            <div className="container">
                <div className="row">
                    {productList.content.map(x => (
                        <div className="col-12 col-md-6 col-xl-4">
                            <ProductCard product={x} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}