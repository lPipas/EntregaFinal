import React from 'react'
import { useParams } from 'react-router-dom';

function TarjetaItem({ item }) {

    const id = useParams().id;

    if (id === undefined) {
        return (
            <div onClick={() => window.location.href = `catalogo/${item.id}`} className='item'>
                <img src={item.url} alt=''></img>
                <span>{item.nombre}</span>
            </div>
        )
    } else {
        return (
            <div className='centrar'>
                <div className='item-details'>
                    <img src={item.url} alt=''></img>
                    <span>{item.nombre}</span>
                    <span>{item.descripcion}</span>
                </div>
            </div>
        )
    }
}

export default TarjetaItem