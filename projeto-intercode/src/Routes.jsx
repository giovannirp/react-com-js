import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./Pages/Inicio/index";
import Favoritos from "./Pages/Favoritos";
import Player from "./Pages/Player";
import NaoEcontrada from "./Pages/NaoEncontrada";
import PaginaBase from "./Pages/PaginaBase";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginaBase/>} >
          <Route index element={<Inicio />}></Route>
          <Route path="favoritos" element={<Favoritos />} />
          <Route path=":id" element={<Player />} />
          <Route path="*" element={<NaoEcontrada />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
