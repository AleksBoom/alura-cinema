import Cabecera from "components/Cabecera/Cabecera"
import FavoritosProvider from "context/Favoritos"
import Container from "components/Container"
import { Outlet } from "react-router-dom"
import Pie from "components/Pie"


function PaginaBase(){
    return(
        <main>
            <Cabecera/>
            <FavoritosProvider>
                <Container>
                    <Outlet/>
                </Container>
            </FavoritosProvider>
            <Pie/>
        </main>
    )
}

export default PaginaBase