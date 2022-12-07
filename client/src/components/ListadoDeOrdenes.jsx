import React, { Fragment, useState, useEffect } from "react";
import{ useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import Actordenes from "./Actordenes";
import axios from "axios"
// const ListadoDeOrdenes = () =>{
//     const { id } = useParams()


const ListadoDeOrdenes = () =>{
    const [ordenes, setordenes] = useState(null)
    const [update, setUpdate] = useState(false)

    useEffect(() => {
        const userId = "63904f6579303dffd06ecd32"
        axios
            .get("http://localhost:9000/ordenes?userId=" + userId)
            .then((response) => {
                console.log(response.data)
                setordenes(response.data)
            })

    }, [update])


    function Agregar() {
        
    }


    function modificar(id){
        console.log(id)
    }

    return (
        <Fragment>
            <h2>----- Listado de Ordenes -----</h2>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col"> ID </th>
                        <th scope="col"> Fecha </th>
                        <th scope="col"> Ciudad de entrega </th>
                        <th scope="col"> Dirección de entrega </th>
                        <th scope="col"> Estado </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        ordenes !== null ? ordenes.map((item, index) =>{
                            return(
                            <tr key={index} onClick={()=>modificar(item.ID)}>
                                <td>{item.user}</td>
                                <td>{item.fecha}</td>
                                <td>{item.ciudad}</td>
                                <td>{item.direccionE}</td>
                                <td>{item.estado}</td>
                                <td> 
                                    <Link className = "btn btn-success" to={'/Actordenes/' + Actordenes._id + '/edit'}>Modificar</Link>
                                    <a className = "btn btn-danger" onClick={() => deleteClick(orden._id)}>Eliminar</a>
                                </td>
                            </tr>
                        )}) :''}


                </tbody>
            </table>

        </Fragment>
    )
}

export default ListadoDeOrdenes