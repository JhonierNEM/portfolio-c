import { Route, Routes } from "react-router-dom";
import Container from "./pages/Container";
import Nav from "./components/navs/Nav";

function App() {
  return (
    <div className="bg-primary min-h-[100vh] overflow-hidden md:flex">
      <div className="hidden w-[10%] md:block ">
        <Nav />
      </div>
      <Routes>
        <Route path="/" element={<Container />} />
      </Routes>
    </div>
  );
}

export default App;
