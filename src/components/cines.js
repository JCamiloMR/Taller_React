import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import Buttonj from "./Button";

//PANTALLA DE CINES, ES LA TERCERA PANTALLA PARA SABER EN QUE CINES ESTA DETERMINADA PELICULA
const Cine = () =>{



    return (

        
        <div className="lista-cines">
            <h1 className="titulo">Cines</h1>

            <br></br>

            <ul>
                <li>Royal Films Bosque Plaza</li>
                <li>Cinemas Procinal Aventura</li>

                <li>Cinemas Procinal Puerta del Norte</li>

                <li>Cinemas procinal Mayorca</li>
                

            </ul>
            <div className="VOLVER-BTN">
                <Link to={"/"}   >
                        <button className="volver">Volver</button>
                </Link>
            </div>
            
        </div>
    )

}


export default Cine

