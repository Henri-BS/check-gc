import { ClientProfileCard } from "components/Card";
import { DebtListByClient } from "pages/Listing";
import { useParams } from "react-router-dom";


export function ClientProfile() {

    const params = useParams();

    return (
        <>
            <div className="container ">
                    <ClientProfileCard clientId={`${params.clientId}`} />
                    <DebtListByClient clientId={`${params.clientId}`} />
                
            </div>
        </>
    );
} 