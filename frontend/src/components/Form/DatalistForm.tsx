import axios from "axios";
import { useState, useEffect } from "react";
import { ClientPage } from "types/client";
import { ProductPage } from "types/product";
import { BASE_URL } from "utils/requests";

export function ClientDatalist() {
    const [value, setValue] = useState("");
    const [clientPage, setClientPage] = useState<ClientPage>({
        content: [],
        number: 0
    });
    useEffect(() => {
        axios.get(`${BASE_URL}/client/list?name=${value}`)
            .then((response) => {
                setClientPage(response.data);
            });
    }, [value]);

    return (
        <>
            <label htmlFor="clientName">Cliente</label>
            <input
                id="clientName"
                list="clientList"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="form-control"
            />
            <datalist id="clientList">
                {clientPage.content.filter((x) => 
                    x.name.includes(value))
                    .map((x) => (
                        <option id="value" value={x.name} key={x.clientId}>
                            {x.name}
                        </option>
                    ))}
            </datalist>
        </>
    );
}

export function ProductDatalist() {
    const [value, setValue] = useState("");
    const [productPage, setProductPage] = useState<ProductPage>({content: [],number: 0})
    useEffect(() => {
        axios.get(`${BASE_URL}/product/list?description=${value}`)
            .then((response) => {
                setProductPage(response.data);
            })
    }, [value]);

    return (
        <>
            <label htmlFor="productDescription">Produto</label>
            <input
                id="productDescription"
                list="productList"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="form-control"
            />
            <datalist id="productList">
                {productPage.content.filter(x =>
                    x.description.includes(value))
                    .map(x => (
                        <option id="value" value={x.description} key={x.productId}>
                         R$ {x.price.toFixed(2)}
                        </option>
                    ))
                }
            </datalist>
        </>
    );
}