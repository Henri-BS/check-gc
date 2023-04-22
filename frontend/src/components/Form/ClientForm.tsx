import axios, { AxiosRequestConfig } from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Client, ClientProps } from "types/client";
import { BASE_URL } from "utils/requests";
import "./styles.css"

export function ClientAddForm() {

    const navigate = useNavigate();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        const name = (event.target as any).name.value;
        const phoneNumber = (event.target as any).phoneNumber.value;
        const address = (event.target as any).address.value;

        const config: AxiosRequestConfig = {
            method: 'POST',
            baseURL: BASE_URL,
            url: `/client/add`,
            data: {
                name: name,
                phoneNumber: phoneNumber,
                address: address
            }
        }
        axios(config).then((response) => {
            navigate(`/client/list`)
        })
    }

    return (
        <form onSubmit={handleSubmit} className="form-container">
            <div className="form-card">
                <div className="form-group">
                    <label htmlFor="name">Nome do Cliente</label>
                    <input id="name" type="text" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="phoneNumber">Contato</label>
                    <input id="phoneNumber" type="text" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="address">Endereço</label>
                    <input id="address" type="text" className="form-control" />
                </div>
            </div>
            <div className="modal-footer">
                <button type="submit" className="btn btn-confirm">Adicionar</button>
            </div>
        </form>
    );
}

export function ClientEditForm({ clientId }: ClientProps) {

    const [client, setClient] = useState<Client>();
    useEffect(() => {
        axios.get(`${BASE_URL}/client/${clientId}`)
            .then((response) => {
                setClient(response.data);
            });
    }, [clientId]);

    const navigate = useNavigate();
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        const name = (event.target as any).name.value;
        const phoneNumber = (event.target as any).phoneNumber.value;
        const address = (event.target as any).address.value;

        const config: AxiosRequestConfig = {
            method: "PUT",
            baseURL: BASE_URL,
            url: `/client/edit`,
            data: {
                clientId: clientId,
                name: name,
                phoneNumber: phoneNumber,
                address: address
            }
        }
        axios(config).then((response) => {
            navigate(`/client/list`)
        });
    }

    return (
        <form onSubmit={handleSubmit} className="form-container">
            <div className="form-card">
                <div className="form-group">
                    <label htmlFor="name">Nome do Cliente</label>
                    <input id="name" type="text" className="form-control" defaultValue={client?.name} />
                </div>
                <div className="form-group">
                    <label htmlFor="phoneNumber">Contato</label>
                    <input id="phoneNumber" type="text" className="form-control" defaultValue={client?.phoneNumber} />
                </div>
                <div className="form-group">
                    <label htmlFor="address">Endereço</label>
                    <input id="address" type="text" className="form-control" defaultValue={client?.address} />
                </div>
            </div>
            <div className="modal-footer">
                <button type="submit" className="btn btn-confirm">Editar</button>
            </div>
        </form>
    );
}

