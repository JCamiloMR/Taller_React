import React, { useState, useEffect } from "react";
import Image from "./Image";
import Descripcion from "./Description";
import Buttonj from "./Button";
import { Link } from "react-router-dom";


//COMPONENTE MAS IMPORTANTE DONDE SE USA UN EVENTO PARA DETECTAR EL CLICK
const Boton_R = () => {
    //LISTA PARA QUE CADA VEZ QUE SE DE CLICK LA IMAGEN CAMBIE CON EL USEFFECT
    const lista = [
        "https://es.web.img3.acsta.net/pictures/23/02/06/17/15/3568166.jpg",
        "https://pics.filmaffinity.com/Spider_Man_No_Way_Home-642739124-large.jpg"
    ];


    //DETECTA EL CLICK
    const [click, setClick] = useState(false);
    //DETECTA EN QUE IMAGEN NOS ENCONTRAMOS
    const [imagenA, setImagenA] = useState(lista[0]);
    //CAMBIA EL NOMBRE DEPENDIENDO EN QUE FOTO DE PELICULA ESTEMOS
    const [nombreI, setNombreI] = useState("Mario Bros");
    //DETECTA LA FOTO EN LA UQE ESTAMOS PARA PASARLE UN NUMERO AL COMPNENTE DE DESCRIPCION Y SEPA CUAL PONER
    const [numero, setNumero] = useState(0);  

    const handleClick = () => {
        setClick(!click);
    };

    useEffect(() => {
        if (click) {
            setImagenA(lista[1]);
            setNumero(1);  
            setNombreI("Spiderman: No Way Home");
        } else {
            setImagenA(lista[0]);
            setNumero(0);  
            setNombreI("Mario Bros La Pelicula");
        }
    }, [click]); 

    return (
        <div className="main-photo">
            <Image src={imagenA} />
            <div className="nombre">
                <h3>{nombreI}</h3>
                <Descripcion numero={numero} />
                <div className="botones">
                    <Link to={"/main"} state={{imagen: imagenA , escrip:numero}}  >
                    <Buttonj ></Buttonj>
                    </Link>

                    <button onClick={handleClick}>Mas</button>


                </div>
            </div>
        </div>
    );
};

export default Boton_R;
