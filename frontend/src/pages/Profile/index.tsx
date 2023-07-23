import { ClientProfileCard } from "components/Card/ClientCard";
import { DebtListByGroupDate, DebtProfileCard } from "components/Card/DebtCard";
import { PaidProfileCard } from "components/Card/PaidCard";
import { ProductProfileCard } from "components/Card/ProductCard";
import { DebtListByClient, DebtListByDate } from "pages/Listing/DebtListing";
import { PaidListByClient, PaidListByDate } from "pages/Listing/PaidListing";
import { PaidListByProduct } from "pages/Listing/ProductListing";
import { useParams } from "react-router-dom";

export function ClientProfile() {

    const params = useParams();

    return (
        <>
            <div className="container ">

                <ClientProfileCard id={`${params.clientId}`} />
                <hr />
                <DebtListByGroupDate id={`${params.clientId}`} />

                <DebtListByClient id={`${params.clientId}`} />
                <PaidListByClient id={`${params.clientId}`} />
            </div>
        </>
    );
}

export function DebtProfile() {

    const params = useParams();
    return (
        <div className="container">
            <DebtProfileCard id={`${params.debtId}`} />
            <hr />
            <DebtListByDate id={`${params.debtId}`} />
        </div>
    )
}

export function PaidProfile() {

    const params = useParams();
    return (
        <div className="container">
            <PaidProfileCard id={`${params.paidId}`} />
            <hr />
            <PaidListByDate id={`${params.paidId}`} />
        </div>
    )
}

export function ProductProfile() {
    const params = useParams();
    return (
        <div className="container">
            <ProductProfileCard id={`${params.productId}`} />
            <hr />
            <PaidListByProduct id={`${params.productId}`} />
        </div>
    );
}
