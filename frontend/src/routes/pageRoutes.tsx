import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "components/Navbar";
import Home from "pages/Home";
import { ClientList} from "pages/Listing/ClientListing";
import { DebtList } from "pages/Listing/DebtListing";
import { PaidList } from "pages/Listing/PaidListing";
import { ProductList } from "pages/Listing/ProductListing";
import { ClientProfile } from "pages/Profile/ClientProfile";
import { DebtProfile } from "pages/Profile/DebtProfile";
import { PaidProfile } from "pages/Profile/PaidProfile";
import { ProductProfile } from "pages/Profile/ProductProfile";

function PageRoutes() {
    return (
        <BrowserRouter>
        <Navbar/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/client-list" element={<ClientList />} />
                <Route path="/debt-list" element={<DebtList />} />
                <Route path="/paid-list" element={<PaidList />} />

                <Route path="/product-list" element={<ProductList />} />

                <Route path="/client" >
                    <Route path=":clientId" element={<ClientProfile/>}/>
                    </Route> 
                    <Route path="/debt" >
                    <Route path=":debtId" element={<DebtProfile/>}/>
                    </Route>
                    <Route path="/paid" >
                    <Route path=":paidId" element={<PaidProfile/>}/>
                    </Route> 
                    <Route path="/product" >
                    <Route path=":productId" element={<ProductProfile/>}/>
                    </Route> 
            </Routes>
        </BrowserRouter>
    );
}

export default PageRoutes;