import styles from "./Favoritos.module.css"
import Titulo from "components/Titulo";
import Banner from "components/Banner";
import { useFavoritosContext } from "context/Favoritos";
import Card from "components/Card";


function Favoritos(){

    const {favorito}=useFavoritosContext();
    return(
        <>
        <Banner img="favoritos" color="#154580"/>
        <Titulo>
           <h1>Mis Favoritos </h1>
        </Titulo>
        <section className={styles.container}>
            {favorito.map((fav)=>{
                return <Card {...fav} key={fav.id} />;
            })}
        </section>
        </>
        
    )
}

export default Favoritos
        



