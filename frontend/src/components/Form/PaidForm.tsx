import axios, { AxiosRequestConfig } from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { PaidProps, Paid } from "types/paid";
import { BASE_URL } from "utils/requests";
import { ClientDatalist, ProductDatalist } from "./DatalistForm";
import { Props } from "types/page";

export function PaidAddForm() {

    const navigate = useNavigate();
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        const clientName = (event.target as any).clientName.value;
        const paymentDate = (event.target as any).paymentDate.value;
        const paymentType = (event.target as any).paymentType.value;
        const productQuantity = (event.target as any).productQuantity.value;
        const productDescription = (event.target as any).productDescription.value;

        const config: AxiosRequestConfig = {
            method: "POST",
            baseURL: BASE_URL,
            url: `/paid/add`,
            data: {
                clientName: clientName,
                paymentDate: paymentDate,
                paymentType: paymentType,
                productDescription: productDescription,
                productQuantity: productQuantity
            }
        }
        axios(config).then((response) => {
            navigate(`/debt-list`);
        })
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
                    <label htmlFor="paymentDate">Data do Pagamento</label>
                    <input id="paymentDate" type="date" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="paymentType">Forma de Pagamento</label>
                    <input id="paymentType" type="text" className="form-control" />
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

export function PaidEditForm({id: paidId }: Props) {

    const [paid, setPaid] = useState<Paid>();
    useEffect(() => {
        axios.get(`${BASE_URL}/paid/${paidId}`)
            .then((response) => {
                setPaid(response.data);
            })
    }, [paidId]);

    const navigate = useNavigate();
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        const clientName = (event.target as any).clientName.value;
        const paymentDate = (event.target as any).paymentDate.value;
        const paymentType = (event.target as any).paymentType.value;
        const productQuantity = (event.target as any).productQuantity.value;
        const productDescription = (event.target as any).productDescription.value;

        const config: AxiosRequestConfig = {
            method: "PUT",
            baseURL: BASE_URL,
            url: `/paid/edit`,
            data: {
                paidId: paidId,
                clientName: clientName,
                paymentDate: paymentDate,
                paymentType: paymentType,
                productDescription: productDescription,
                productQuantity: productQuantity
            }
        }
        axios(config).then((response) => {
            navigate(`/paid-list`);
        })
    }

    return (
        <form onSubmit={handleSubmit} className="form-container">
            <div className="form-card">
                <div className="form-group">
                    <ClientDatalist/>
                </div>
                <div className="form-group">
                    <ProductDatalist />
                </div>
                <div className="form-group">
                    <label htmlFor="paymentDate">Data do Pagamento</label>
                    <input id="paymentDate" type="date" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="paymentType">Forma de Pagamento</label>
                    <input id="paymentType" type="text" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="productQuantity">Quantidade do Produto</label>
                    <input id="productQuantity" type="text" className="form-control" />
                </div>
            </div>

            <div className="modal-footer">
                <button type="submit" className="btn btn-confirm">Editar</button>
            </div>
        </form>
    );
}
