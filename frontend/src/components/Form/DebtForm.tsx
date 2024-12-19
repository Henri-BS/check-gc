import axios, { AxiosRequestConfig } from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Debt } from "types/debt";
import { BASE_URL } from "utils/requests";
import { ClientDatalist, ProductDatalist } from "./DatalistForm";
import { Props } from "types/page";

export function DebtAddForm() {

    const navigate = useNavigate();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        const clientName = (event.target as any).clientName.value;
        const debtDate = (event.target as any).debtDate.value;
        const productDescription = (event.target as any).productDescription.value;
        const productQuantity = (event.target as any).productQuantity.value;

        const config: AxiosRequestConfig = {
            method: "POST",
            baseURL: BASE_URL,
            url: `/debt/add`,
            data: {
                clientName: clientName,
                debtDate: debtDate,
                productDescription: productDescription,
                productQuantity: productQuantity
            }
        }
        axios(config).then((response) => {
            navigate("/debt-list");
        });
    }
    return (
        <form onSubmit={handleSubmit} className="form-container">
            <div className="form-card">
                <div className="form-group">
                    <ClientDatalist />
                </div>
                <div className="form-group">
                    <ProductDatalist />
                </div>
                <div className="form-group">
                    <label htmlFor="debtDate">Data da Compra</label>
                    <input id="debtDate" type="date" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="productQuantity">Quantidade do Produto</label>
                    <input id="productQuantity" type="text" className="form-control" />
                </div>
            </div>
            <div className="modal-footer">
                <button type="submit" className="btn btn-confirm">Adicionar</button>
            </div>
        </form>
    );
}

export function DebtEditForm({id: debtId }: Props) {

    const navigate = useNavigate();

    const [debt, setDebt] = useState<Debt>();
    useEffect(() => {
        axios.get(`${BASE_URL}/debt/${debtId}`)
            .then((response) => {
                setDebt(response.data);
            });
    }, [debtId]);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        const debtDate = (event.target as any).debtDate.value;
        const productQuantity = (event.target as any).productQuantity.value;
        const clientName = (event.target as any).clientName.value;
        const product = (event.target as any).product.value;

        const config: AxiosRequestConfig = {
            method: "PUT",
            baseURL: BASE_URL,
            url: `/debt/edit`,
            data: {
                debtId: debtId,
                debtDate: debtDate,
                productQuantity: productQuantity,
                clientName: clientName,
                product: product
                        }
        }
        axios(config).then((response) => {
            navigate("/debt-list");
        });
    }
    return (
        <form onSubmit={handleSubmit} className="form-container">
            <div className="form-card">
            <div className="form-group ">
                    <ClientDatalist/>
                </div>

                <div className="form-group">
                    <ProductDatalist/>
                </div>

                <div className="form-group">
                    <label htmlFor="debtDate">Data da Compra</label>
                    <input id="debtDate" type="date" className="form-control" defaultValue={debt?.debtDate} />
                </div>
                <div className="form-group">
                    <label htmlFor="productQuantity">Quantidade do Produto</label>
                    <input id="productQuantity" className="form-control" defaultValue={debt?.productQuantity} />
                </div>

              
            </div>
            <div className="modal-footer">
                <button type="submit" className="btn btn-confirm">Editar</button>
            </div>
        </form>
    );
}