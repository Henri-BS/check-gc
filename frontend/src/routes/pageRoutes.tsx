import Home from "pages/Home";
import { ClientList, DebtList, ProductList } from "pages/Listing";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function PageRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/client-list" element={<ClientList />} />
                <Route path="/debt-list" element={<DebtList />} />
                <Route path="/product-list" element={<ProductList />} />
            </Routes>
        </BrowserRouter>
    );
}

export default PageRoutes;