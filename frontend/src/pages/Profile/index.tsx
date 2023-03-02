import { ClientProfileCard } from "components/Card";
import { useParams } from "react-router-dom";
import "./styles.css";

export function ClientProfile() {

    const params = useParams();

    return (
        <>
            <div className="container m-0">
                <div className="row">
                <div className="col-lg-6"><ClientProfileCard clientId={`${params.clientId}`} /></div>
                </div>
            </div>
        </>
    );
} 