
import Banner from "components/Banner";
import Titulo from "components/Titulo";
import styles from "./Index.module.css"
import Card from "components/Card";
import {useState, useEffect  } from "react";



function Inicio(){
    const [videos, setVideos]= useState([]);

    useEffect(()=>{
        fetch (
        "https://my-json-server.typicode.com/AleksBoom/alura-cinema-api/videos")
        .then((response) => response.json())
        .then((data)=>{
            setVideos(data);
        });

    },[]);
    return(
        <>
         
         <Banner img="home" color="#154580"/>
         <Titulo>
            <h1>Un lugar para guardar sus videos favoritos </h1>
         </Titulo>

        <section className={styles.container}>
        {videos.map((video)=>{
            return <Card{...video} key={video.id}></Card>
            })}
        </section>

         
        
        </>
       
   
)
        
    
}
export default Inicio;