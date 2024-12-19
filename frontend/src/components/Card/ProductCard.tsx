import { Link } from "react-router-dom";
import { ProductProps } from "types/product";


export function ProductCard({ product }: ProductProps) {
    return (
        <>
            <Link to={`/product/${product.productId}`}>
                <div className="card-md-container blur-container">
                    <div className="card-md-title">
                        <li>{product.description}</li>
                    </div>
                    <div className="card-md-item "> Preço:
                        <p className="card-md-content">{product.price.toFixed(2)}</p>
                    </div>
                </div>
            </Link>
        </>
    );
}

