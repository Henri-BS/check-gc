import axios, { AxiosRequestConfig } from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Props } from "types/page";
import { Product } from "types/product";
import { BASE_URL } from "utils/requests";

export function ProductAddForm() {

    const navigate = useNavigate();
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        const description = (event.target as any).description.value;
        const price = (event.target as any).price.value;

        const config: AxiosRequestConfig = {
            method: "POST",
            baseURL: BASE_URL,
            url: "/product/add",
            data: {
                description: description,
                price: price,
            }
        }
        axios(config).then((response) => {
            navigate(`/product-list`)
        });
    }
    return (
        <form onSubmit={handleSubmit} className="form-container">
            <div className="form-card">
                <div className="form-group">
                    <label htmlFor="description">Descrição:</label>
                    <input className="form-control" id="description" />
                </div>
                <div className="form-group">
                    <label htmlFor="price">Preço:</label>
                    <input className="form-control" id="price" />
                </div>
            </div>
            <div className="modal-footer">
                <button type="submit" className="btn btn-confirm">Adicionar</button>
            </div>
        </form>
    );
}

export function ProductEditForm({id: productId }: Props) {
    const navigate = useNavigate();
    const [product, setProduct] = useState<Product>();
    useEffect(() => {
        axios.get(`${BASE_URL}/product/${productId}`)
            .then((response) => {
                setProduct(response.data);
            });
    }, [productId]);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        const description = (event.target as any).description.value;
        const price = (event.target as any).price.value;

        const config: AxiosRequestConfig = {
            method: "PUT",
            baseURL: BASE_URL,
            url: "/product/edit",
            data: {
                productId: productId,
                description: description,
                price: price,
            }
        }
        axios(config).then((response) => {
            navigate(`/product/${productId}`)
        });
    }

    return (
        <form onSubmit={handleSubmit} className="form-container">
            <div className="form-card">
                <div className="form-group">
                    <label htmlFor="description">Descrição:</label>
                    <input id="description" className="form-control" defaultValue={product?.description} />
                </div>
                <div className="form-group">
                    <label htmlFor="price">Preço:</label>
                    <input id="price" className="form-control" defaultValue={product?.price} />
                </div>
            </div>
            <div className="modal-footer">
                <button type="submit" className="btn btn-confirm">Editar</button>
            </div>
        </form>
    );
}