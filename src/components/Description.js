import React, {useState, useEffect} from "react";

//AQUI DEPENDIENDO DE EN QUE FOTO DE PELICULA SE ENCUNETRE, TAMBIEN SE DETERMINA QUE DESCRIPCION PONER CON EL USO DEL USEEFFECT EN BOTON_
const Descripcion = ({numero}) =>{

    var lista = [
        "Adentrate en las aventuras de Mario y sus amigos",
        "Preparate para vivir una realidad multiversal con Spiderman No Way Home"
    ];

   
    const [dI, setDI] = useState(lista[0]);

    useEffect(() => {
        if (numero === 1) {
            setDI(lista[1]); 
        } else {
            setDI(lista[0]);
        }
    });


    return (
        <div>
            <p className="descripcionP">{dI}</p>
        </div>
    )

}


export default Descripcion

