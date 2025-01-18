import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./Pages/Inicio/index";
import Favoritos from "./Pages/Favoritos";
import Player from "./Pages/Player";

import Cabecalho from "./Components/Cabecalho";
import Rodape from "./Components/Rodape";
import Container from "./Components/Container";
import FavoritosProvider from "./Contextos/Favoritos";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Cabecalho />
      <Container>
        <FavoritosProvider>
          <Routes>
            <Route path="/" element={<Inicio />}></Route>
            <Route path="/favoritos" element={<Favoritos />} />
            <Route path="/:id" element={<Player />} />

          </Routes>
        </FavoritosProvider>
      </Container>

      <Rodape />
    </BrowserRouter>
  );
}

export default AppRoutes;
