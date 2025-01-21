import axios from "axios";
import { ProductEditForm } from "components/Form/ProductForm";
import { ProductMockProfile } from "mock/MockProfile";
import { PaidListByProduct } from "pages/Listing/ProductListing";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Props } from "types/page";
import { Product } from "types/product";
import { BASE_URL } from "utils/requests";

export function ProductProfile() {
    const params = useParams();
    return (
        <div className="container">
            <ProductProfileInfo id={`${params.productId}`} />
            <hr />
            <PaidListByProduct id={`${params.productId}`} />
        </div>
    );
}

export function ProductProfileInfo({ id: productId }: Props) {

    const params = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState<Product>();
    useEffect(() => {
        axios.get(`${BASE_URL}/product/${productId}`)
            .then((response) => {
                setProduct(response.data);
            });
    }, [productId]);

    useEffect(() => {
        axios.put(`${BASE_URL}/product/update-value/${productId}`)
            .then((response) => {
                setProduct(response.data);
            });
    }, [productId]);

    const deleteProduct = () => {
        axios.delete(`${BASE_URL}/product/delete/${productId}`)
            .then((response) => {
                console.log(response.status);
                navigate(`/product-list`);
            })
    }

    return (
        <>
            <div className="sub-navbar">
                <button className="btn btn-primary" data-bs-target="#productEditModal" data-bs-toggle="modal">
                    <i className="fa fa-edit" /> Editar
                </button>
                <button className="btn btn-danger" data-bs-target="#productDeleteModal" data-bs-toggle="modal">
                    <i className="fa fa-trash" /> Deletar
                </button>
            </div>
            <hr />

            {!product ? <ProductMockProfile id={`${params.productId}`} /> :
                <ul className="card-md-list">
                    <li className="card-lg-item "> Descrição:
                        <p className="card-lg-content">{product?.description}</p>
                    </li>
                    <li className=" card-lg-item">Preço:
                        <p className="card-lg-content">R${product?.price.toFixed(2)}</p>
                    </li>
                </ul>
            }

            <div className="modal fade" role={"dialog"} id={"productEditModal"}>
                <div className="modal-dialog" role={"document"}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <label htmlFor="productLabel" className="modal-title">Alterar dados da produto</label>
                            <button className="close" data-bs-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true"><i className="fa fa-times" /></span>
                            </button>
                        </div>
                        <div className="modal-body"><ProductEditForm id={`${params.productId}`} /></div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="productDeleteModal" role={"dialog"}>
                <div className="modal-dialog" role={"document"}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <label htmlFor="productLabel" className="modal-title">Deseja deletar este produto ?</label>
                            <button className="close" data-bs-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true"><i className="fa fa-times" /></span>
                            </button>
                        </div>
                        <div className="modal-footer">
                            <button onClick={() => deleteProduct()} className="btn btn-danger" data-bs-dismiss="modal">Deletar</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}