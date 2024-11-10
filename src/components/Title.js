import React, {useState, useEffect} from "react";


const Title = () =>{


    const [text, setText]= useState("Hola")

    useEffect(()=>{
        setText("Peliculas")
    }, [text])


    return (
        <div>
            <h1 className="titulo">{text}</h1>
        </div>
    )

}


export default Title

