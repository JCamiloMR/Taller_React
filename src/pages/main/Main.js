import TableMain from "./components/TableMain";
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom"
import LoaderAllItems from "../../services/LoaderAllItems";
import Detalle from "../../components/Detalle";

const Main = () => {

    const url = `https://official-joke-api.appspot.com/random_joke`
    const [cleanDataDetail, setcleanDataDetail] = useState([])
      
    useEffect(() => {
        LoaderAllItems(setcleanDataDetail, url)
    }, [setcleanDataDetail])

    //DEVUELVO LA SEGUNDA PANTALLA QUE ES LA DE DETALLES, DONDE SE PASAN PARAMETROS COMO LA FOTO Y LA DESCRIPCION (EN EL COMPONENTE BOTON_)
    // DE LA PELICULA SELECCIONADA CON EL BOTON LEER MAS
    return (
        <div>
            <Detalle></Detalle>
        </div>
    )
}

export default Main;