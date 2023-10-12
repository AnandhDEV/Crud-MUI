import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import Settings from "./pages/settings/settings";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/" element={<Settings />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
