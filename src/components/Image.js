import React, {useState, useEffect} from "react";

//SOLO RECIBE UNA SRC DE INTERNET PARA LA IMAGEN QUE CAMBIA CADA VEZ QUE SE LE DA CLICK AL COMPONENTE BOTON_
const Image = ({src}) =>{

    return (
        <div className="img-body">
            <img src={src}></img>
        </div>


    )

}


export default Image

