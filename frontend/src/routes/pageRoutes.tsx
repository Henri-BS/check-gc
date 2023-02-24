import Home from "pages/Home";
import { ClientList, DebtList } from "pages/Listing";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function PageRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/client-list" element={<ClientList />} />
                <Route path="/debt-list" element={<DebtList />} />
            </Routes>
        </BrowserRouter>
    );
}

export default PageRoutes;