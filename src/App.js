import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header, Category,SubCategory, AboutUs, Footer } from "./Pages/index";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <BrowserRouter className={"root"}>
        <Header />
        <Routes>
          <Route index element={<Category />} />
          <Route path="Category" element={<Category />} />
          <Route path="SubCat" element={<SubCategory />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="*" element={<>No Page Found...</>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
