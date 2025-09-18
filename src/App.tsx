
import {Routes, Route,  } from "react-router-dom";
import Category from "./Category";

import Home from "./Home";

export default function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
         <Home />
        }
      />
      <Route path="/category" element={<Category />} />

      <Route path="*" element={<Home />} />
    </Routes>
  );
}
