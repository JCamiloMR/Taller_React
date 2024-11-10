import React from "react";
import { Link, useLocation } from "react-router-dom";
import Descripcion from "./Description";


//AQUI SE OBTIENE LA FOTO Y DESCRIPCION DE LA FOTO ACTUAL (EN LA PANTALLA HOME AL DARLE CLICK AL BOTON LEER MAS)

const Detalle = () => {
    const location = useLocation();  // Obtener la ubicación actual
    const imagen = location.state?.imagen;  // Usamos el mismo nombre que pasamos en el Link 
    const numero = location.state?.escrip; //el numero para saber que descripcion poner

    return (
        <div>
            <h1 className="titulo">Detalles de la película</h1>
            <div className="img-body">
                {imagen ? <img src={imagen}  alt="Película" /> : <p>No se ha pasado una imagen.</p>}
                <div>
                    <Descripcion numero={numero}></Descripcion>
                    <Link to={"/cines"}>
                        <button>Encuentralo en</button>

                    </Link>


                </div>


            </div>
        </div>
    );
};

export default Detalle;