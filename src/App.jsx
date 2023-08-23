import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
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

const BASE_URL = "http://localhost:8000";

function App() {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchCities() {
    try {
      setIsLoading(true);
      const reponse = await fetch(`${BASE_URL}/cities`);
      if (!reponse.ok) {
        throw new Error("Data not found");
      }
      const data = await reponse.json();
      setCities(data);
    } catch (error) {
      alert(`${error.name}: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchCities();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/app" element={<AppLayout />}>
          <Route
            index
            element={<CityList cities={cities} isLoading={isLoading} />}
          />
          <Route
            path="cities"
            element={<CityList cities={cities} isLoading={isLoading} />}
          />
          <Route path="cities/:id" element={<City cities={cities} />} />
          <Route
            path="countries"
            element={<CountryList cities={cities} isLoading={isLoading} />}
          />
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
