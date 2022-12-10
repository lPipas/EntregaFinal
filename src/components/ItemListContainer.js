import React from 'react'
import TarjetaItem from './TarjetaItem';

function ItemListContainer({ producto }) {
    return (
        <div className='catalogo'>
            <div className='subtitulo-catalogo'><span className='subtitulo'>{producto.tipo}</span></div>
            <div className='items'>
                {
                    producto.items?.map(item => <TarjetaItem key={item.id} item={item} />)
                }
            </div>
        </div>
    )
}

export default ItemListContainer;