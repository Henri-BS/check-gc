import { ClientProfileCard } from "components/Card/ClientCard";
import { DebtProfileCard } from "components/Card/DebtCard";
import { ProductProfileCard } from "components/Card/ProductCard";
import { DebtListByClient, DebtListByDate } from "pages/Listing";
import { useParams } from "react-router-dom";

export function ClientProfile() {

    const params = useParams();

    return (
        <>
            <div className="container ">
                
                <ClientProfileCard clientId={`${params.clientId}`} />
                <hr />
                <DebtListByClient clientId={`${params.clientId}`} />
            </div>            
        </>
    );
}

export function DebtProfile() {

    const params = useParams();
    return(
        <div className="container"> 
        <DebtProfileCard debtId={`${params.debtId}`}/>
        <hr />
        <DebtListByDate debtId={`${params.debtId}`}/>
        </div>
    )
}

export function ProductProfile(){
    const params = useParams();
    return(
        <div className="container">
        <ProductProfileCard productId={`${params.productId}`}/>
        </div>
    );
}