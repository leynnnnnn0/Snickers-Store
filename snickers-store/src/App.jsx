import MainPage from "./pages/MainPage";
import Items from "./pages/Products";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css"
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<MainPage />} />
        <Route index path="/home" element={<MainPage />} />
        <Route path="/products" element={<Items />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App