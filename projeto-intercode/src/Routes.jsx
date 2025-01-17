import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./Pages/Inicio/index";
import Favoritos from "./Pages/Favoritos";
import Cabecalho from "./Components/Cabecalho";
import Rodape from "./Components/Rodape";
import Container from "./Components/Container";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Cabecalho />
      <Container>
        <Routes>
          <Route path="/" element={<Inicio />}></Route>
          <Route path="/favoritos" element={<Favoritos />} />
        </Routes>
      </Container>

      <Rodape />
    </BrowserRouter>
  );
}

export default AppRoutes;
