import Cabecalho from '../../Components/Cabecalho'
import FavoritosProvider from '../../Contextos/Favoritos'
import Container from '../../Components/Container'
import { Outlet } from 'react-router-dom'
import Rodape from '../../Components/Rodape'

export default function PaginaBase() {
  return (
    <main>
        <Cabecalho />
        <FavoritosProvider>
            <Container>
                <Outlet />
            </Container>
        </FavoritosProvider>
        <Rodape />
    </main>
  )
}
