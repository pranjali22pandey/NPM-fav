import * as React from "react";
import { Routes, Route } from "react-router-dom";
import { NotFound } from "./screens/NotFound";
import Home from "./screens/Home";
import AddFavoritePackages from "./screens/AddFavoritePackages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/add-fav-npm-packages"
        element={<AddFavoritePackages />}
      />
      <Route path={"*"} element={<NotFound />} />
    </Routes>
  );
}

export default App;
