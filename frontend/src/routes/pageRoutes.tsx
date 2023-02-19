import Home from "pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function PageRoutes(){
return(
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>}/>
    </Routes>
    </BrowserRouter>
);
}

export default PageRoutes;