import Home from "pages/Home";
import { ClientList } from "pages/Listing";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function PageRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/client-list" element={<ClientList />} />
            </Routes>
        </BrowserRouter>
    );
}

export default PageRoutes;