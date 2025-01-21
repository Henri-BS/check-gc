import axios from "axios";
import { PaidSmallCard } from "components/Card/PaidCard";
import { ProductCard } from "components/Card/ProductCard";
import { ProductAddForm } from "components/Form/ProductForm";
import Pagination from "components/Pagination";
import { ProductMockList } from "mock/MockList";
import { useState, useEffect } from "react";
import { Props } from "types/page";
import { Paid } from "types/paid";
import { ProductPage } from "types/product";
import { BASE_URL } from "utils/requests";

export function ProductList() {

    const [value, setValue] = useState("");

    const [pageNumber, setPageNumber] = useState(0);
    const handlePageChange = (newPageNumber: number) => {
        setPageNumber(newPageNumber);
    }

    const [productList, setProductList] = useState<ProductPage>({
        content: [],
        number: 0
    });
    useEffect(() => {
        axios.get(`${BASE_URL}/product/list?page=${pageNumber}&description=${value}&size=9`)
            .then((response) => {
                setProductList(response.data);
            });
    }, [pageNumber, value]);

    return (
        <>
            {!productList.content.length ? <ProductMockList /> :
                <div className="container">
                    <div className="pagination-container row">
                        <div className="col-12 col-md-4 col-xl-3 mb-2" data-bs-target="#addProductModal" data-bs-toggle="modal">
                            <button className="btn btn-confirm"><i className="fa fa-save" /> Adicionar Produto</button>
                        </div>
                        <div className="col-12 col-md-4 col-xl-6 mb-2" >
                            <Pagination page={productList} onPageChange={handlePageChange} />
                        </div>
                        <div className="col-12 col-md-4 col-xl-3 mb-2" >
                            <div className="form-group">
                                <input type="text"
                                    id="value"
                                    value={value}
                                    onChange={e => setValue(e.target.value)}
                                    className="form-control"
                                    placeholder="buscar por descrições..."
                                />
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        {productList.content.filter((x) =>
                            x.description.toUpperCase().includes(value.toLocaleUpperCase()))
                            .map((x) => (
                                <div className="col-12 col-md-6 col-xl-4 mb-3">
                                    <ProductCard product={x} />
                                </div>
                            ))}
                    </div>
                </div>
            }

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

export function PaidListByProduct({ id: productId }: Props) {

    const [paidList, setPaidList] = useState<Paid[]>();
    useEffect(() => {
        axios.get(`${BASE_URL}/paid/list-product/${productId}`)
            .then((response) => {
                setPaidList(response.data);
            })
    }, [productId]);

    return (
        <>
            {!paidList?.length ? "" :
                <div>
                    <div className="homelist-title">
                        <div><i className="fa fa-bookmark" /> Compras Pagas do Produto</div>
                    </div>
                    <div className="horizontal-list-container">
                        {paidList?.map((x) => (
                            <div key={x.paidId} className="horizontal-list-item">
                                <PaidSmallCard paid={x} />
                            </div>
                        ))}
                    </div>
                </div>
            }
        </>
    );
}
