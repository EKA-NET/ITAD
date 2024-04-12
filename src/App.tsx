import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Sponsors } from "./pages/Sponsors";
import { Layout } from "./components/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/sponsors/" element={<Sponsors />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
