// import logo from "./logo.svg";

import Header from "./components/Header";
import Employees from "./pages/Employees";
import Customers from "./pages/Customers";
import Dictionary from "./pages/Dictionary";
import NotFound from "./pages/NotFound";

// import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import Definition from "./pages/Definition";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header>
          <Routes>
            <Route path="/employees" element={<Employees></Employees>} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/dictionary" element={<Dictionary />} />
            <Route path="/definition" element={<Definition />} />
            <Route path="/definition/:search" element={<Definition />} />
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Header>
      </BrowserRouter>
    </>
  );
}

export default App;
