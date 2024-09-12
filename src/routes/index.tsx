import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "../components/Pages/Home/Home"
import ProductDetails from "../components/Pages/ProductDetails/ProductDetails"


const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/details/:id" element={<ProductDetails />} />
            </Routes>
        </Router>
    )
}

export default AppRoutes