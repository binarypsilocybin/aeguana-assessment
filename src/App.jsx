import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Success from "./pages/success";
import NoPage from "./pages/nopages";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="success" element={<Success />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
