import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import Menu from "./components/navs/Menu";
import Nav from "./components/navs/Nav";
import Footer from "./components/footers/Footer";
import ScrollToTop from "./components/others/ScrollToTop";

import Container from "./pages/Container";
import DetailPJ from "./pages/projects/DetailPJ";

function App() {
  const viewNav = useSelector((state) => state.app.viewNav);

  return (
    <div className="bg-primary min-h-[100vh] min-w-[350px] overflow-hidden">
      <Nav view={viewNav} />
      <div className="w-14 h-14 fixed bottom-6 right-6 grid place-content-center p-1 rounded-full shadow z-50 md:hidden">
        <Menu view={viewNav} />
      </div>

      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Container />} />
        <Route path="/project/:id" element={<DetailPJ />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
