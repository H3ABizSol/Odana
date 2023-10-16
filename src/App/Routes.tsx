import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../Home/Home";
import { Menucard } from "../Home/Menucard/Menucard";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menucard" element={<Menucard />} />
      </Routes>
    </BrowserRouter>
  );
};
