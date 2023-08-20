import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Login from "./pages/Login/Login.jsx";
import PageNotFound from "./pages/PageNotFound/PageNotFound.jsx";
import Product from "./pages/Product/Product.jsx";
import AppLayout from "./pages/Layout/AppLayout.jsx";
import Pricing from "./pages/Pricing/Pricing.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/app" element={<AppLayout />}>
          <Route index element={<p>List</p>} />
          <Route path="cities" element={<p>List of cities</p>} />
          <Route path="countries" element={<p>List of Countries</p>} />
          <Route path="form" element={<p>Form</p>} />
        </Route>
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/product" element={<Product />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
