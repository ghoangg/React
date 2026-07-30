import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import CategoryPage from "./pages/CategoryPage";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<CategoryPage />} />
        <Route path="/category" element={<CategoryPage />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}
export default App;