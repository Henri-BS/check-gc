import { ClientProfileCard } from "components/Card/ClientCard";
import { DebtProfileCard } from "components/Card/DebtCard";
import { PaidProfileCard } from "components/Card/PaidCard";
import { ProductProfileCard } from "components/Card/ProductCard";
import { DebtListByClient, DebtListByDate } from "pages/Listing/DebtListing";
import { PaidListByClient, PaidListByDate } from "pages/Listing/PaidListing";
import { useParams } from "react-router-dom";

export function ClientProfile() {

    const params = useParams();

    return (
        <>
            <div className="container ">
                
                <ClientProfileCard clientId={`${params.clientId}`} />
                <hr />
                <DebtListByClient clientId={`${params.clientId}`} />
                <PaidListByClient clientId={`${params.clientId}`} />
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

export function PaidProfile() {

    const params = useParams();
    return(
        <div className="container"> 
        <PaidProfileCard paidId={`${params.paidId}`}/>
        <hr/>
        <PaidListByDate  paidId={`${params.paidId}`}/>
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
