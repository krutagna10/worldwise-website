import { BrowserRouter, Link, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Login from "./pages/Login/Login.jsx";
import PageNotFound from "./pages/PageNotFound/PageNotFound.jsx";
import Product from "./pages/Product/Product.jsx";
import AppLayout from "./pages/AppLayout/AppLayout.jsx";
import Pricing from "./pages/Pricing/Pricing.jsx";
import CityList from "./components/CityList/CityList.jsx";
import { useEffect, useState } from "react";
import CountryList from "./components/CountryList/CountryList.jsx";
import City from "./components/City/City.jsx";
import Form from "./components/Form/Form.jsx";
import data from "../data/data.js";

function App() {
  const [cities, setCities] = useState(data);

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/app" element={<AppLayout />}>
          <Route index element={<Navigate replace to="cities" />} />
          <Route path="cities" element={<CityList cities={cities} />} />
          <Route path="cities/:id" element={<City cities={cities} />} />
          <Route path="countries" element={<CountryList cities={cities} />} />
          <Route path="form" element={<Form />} />
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
