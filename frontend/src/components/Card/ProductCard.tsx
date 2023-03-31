import axios from "axios";
import { ProductEditForm } from "components/Form";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Product, ProductProps } from "types/product";
import { BASE_URL } from "utils/requests";

type ProductCardProps = {
    product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
    return (
        <>
        <Link to={`/product/${product.productId}`}>
            <div className="card-md-container blur-container">
                <div className="card-md-title">
                    <li>{product.description}</li>
                </div>
                <div className="card-md-item "> Preço:
                    <p className="card-md-content">{product.price}</p>
                </div>
            </div>
            </Link>
        </>
    );
}

export function ProductProfileCard({ productId }: ProductProps) {

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
                <Link to={`/product-list`} className="sub-navbar-item">
                    <i className="fa fa-chevron-left" />
                </Link>
                <button className="btn btn-primary" data-bs-target="#productEditModal" data-bs-toggle="modal">
                    <i className="fa fa-edit" /> Editar Produto
                </button>
                <button className="btn btn-danger" data-bs-target="#productDeleteModal" data-bs-toggle="modal">
                    <i className="fa fa-trash" /> Deletar Produto
                </button>
            </div>
            <hr />
            <ul className="card-md-list">
                <li className="card-lg-item "> Descrição:
                    <p className="card-lg-content">{product?.description}</p>
                </li>
                <li className=" card-lg-item">Preço:
                    <p className="card-lg-content">{product?.price}</p>
                </li>
                <li className=" card-lg-item">Quantidade de Compras do Produto:
                    <p className="card-lg-content">{product?.debtQuantity}</p>
                </li>
            </ul>

            <div className="modal fade" role={"dialog"} id={"productEditModal"}>
                <div className="modal-dialog" role={"document"}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <label htmlFor="productLabel" className="modal-title">Alterar dados da produto</label>
                            <button className="close" data-bs-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true"><i className="fa fa-times" /></span>
                            </button>
                        </div>
                        <div className="modal-body"><ProductEditForm productId={`${params.productId}`} /></div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="productDeleteModal" role={"dialog"}>
                <div className="modal-dialog" role={"document"}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <label htmlFor="productLabel" className="modal-title">Deseja deletar este produto ?</label>
                            <button className="close" data-bs-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true"><i className="fa fa-times"/></span>
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