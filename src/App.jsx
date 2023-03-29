import { Route, Routes } from "react-router-dom";
import Menu from "./components/navs/Menu";
import Nav from "./components/navs/Nav";
import Footer from "./components/footers/Footer";

import Container from "./pages/Container";
import DetailPJ from "./pages/projects/DetailPJ";

function App() {
  return (
    <div className="bg-primary min-h-[100vh] min-w-[350px] overflow-hidden">
      <Nav />
      <div className="w-14 h-14 fixed bottom-6 right-6 grid place-content-center p-1 rounded-full shadow z-50 md:hidden">
        <Menu />
      </div>
      <Routes>
        <Route path="/" element={<Container />} />
        <Route path="/project/:id" element={<DetailPJ />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
