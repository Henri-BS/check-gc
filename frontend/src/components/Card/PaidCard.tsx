import axios from "axios";
import { ClientEditForm, DebtEditForm, ProductEditForm } from "components/Form";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Client, ClientProps } from "types/client";
import { Debt, DebtProps } from "types/debt";
import { Paid } from "types/paid";
import { Product, ProductProps } from "types/product";
import { BASE_URL } from "utils/requests";
import "./styles.css"




type PaidCardProps = {
    paid: Paid
}

export function PaidCard({paid}: PaidCardProps){
return (
    <Link to={`/paid/${paid.paidId}`}>
        <div className="card-md-container blur-container">
            <div className="card-md-title">
                {paid.clientName}
            </div>
            <ul className="card-md-list">
                <li className="card-md-item"> Data do Pagamento: 
                    <p className="card-md-content">{paid.paymentDate}</p>
                </li>
                <li className="card-md-item"> Tipo de Pagamento: 
                    <p className="card-md-content">{paid.paymentType}</p>
                </li>
                
                <li className="card-md-item"> Producto Comprado: 
                    <p className="card-md-content">{paid.productDescription}</p>
                </li>
                <li className="card-md-item"> Quantidade: 
                    <p className="card-md-content">{paid.productQuantity}</p>
                </li>
                <li className="card-md-item"> Valor da Compra: 
                    <p className="card-md-content">{paid.productAmount}</p>
                </li>
            </ul>
        </div>
    </Link>
);
}

