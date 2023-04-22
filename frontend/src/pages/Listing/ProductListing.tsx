import axios from "axios";
import { ProductCard } from "components/Card/ProductCard";
import { ProductAddForm } from "components/Form/ProductForm";
import { Navbar } from "components/Navbar";
import Pagination from "components/Pagination";
import { useState, useEffect } from "react";
import { ProductPage } from "types/product";
import { BASE_URL } from "utils/requests";

export function ProductList() {

    const [pageNumber, setPageNumber] = useState(0);
    const handlePageChange = (newPageNumber: number) => {
        setPageNumber(newPageNumber);
    }

    const [productList, setProductList] = useState<ProductPage>({
        content: [],
        number: 0
    });
    useEffect(() => {
        axios.get(`${BASE_URL}/product/list?page=${pageNumber}&size=3`)
            .then((response) => {
                setProductList(response.data);
            });
    }, [pageNumber]);

    return (
        <>
            <Navbar />
            <div className="container">
                <div className="pagination-container row">
                    <div className="col-12 col-md-4 col-xl-3 mb-2" data-bs-target="#addProductModal" data-bs-toggle="modal">
                        <button className="btn btn-confirm"><i className="fa fa-save" /> Adicionar Produto</button>
                    </div>
                    <div className="col-12 col-md-4 col-xl-6 mb-2" >
                        <Pagination page={productList} onPageChange={handlePageChange} />
                    </div>
                    <div className="col-12 col-md-4 col-xl-3 mb-2" >Produtos Catalogados: {productList.totalElements}</div>
                </div>

                <div className="row">
                    {productList.content.map(x => (
                        <div className="col-12 col-md-6 col-xl-4">
                            <ProductCard product={x} />
                        </div>
                    ))}
                </div>
            </div>

            <div className="modal fade" id="addProductModal" role={"dialog"} >
                <div className="modal-dialog" role={"document"}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <label htmlFor="productLabel" className="modal-title">Adicionar um novo produto</label>
                            <button className="close" data-bs-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true"><i className="fa fa-times" /></span>
                            </button>
                        </div>
                        <div className="modal-body"><ProductAddForm /></div>
                    </div>
                </div>
            </div>
        </>
    );
}