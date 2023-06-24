// import logo from "./logo.svg";

import Header from "./components/Header";
import Employees from "./pages/Employees";
import Customers from "./pages/Customers";
import Dictionary from "./components/Dictionary";

// import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header>
          <Routes>
            <Route path="/employees" element={<Employees></Employees>} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/dictionary" element={<Dictionary />} />
          </Routes>
        </Header>
      </BrowserRouter>
    </>
  );
}

export default App;
