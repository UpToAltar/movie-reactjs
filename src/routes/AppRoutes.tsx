
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "../HomePage/HomePage.tsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "../HomePage/Home.tsx";
import SearchPage from "../HomePage/SearchPage.tsx";
function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>}>
                    <Route index element={<Home />} />
                    <Route path="search" element={<SearchPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;