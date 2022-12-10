import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import TarjetaItem from '../components/TarjetaItem.js';

import { getFirestore, collection, getDocs } from 'firebase/firestore'

function ItemDetailContainer() {

    const [item, setItem] = useState({
        nombre: '',
        url: '',
    });

    const id = useParams().id;

    useEffect(() => {
        const db = getFirestore();
        const querySnapshot = collection(db, 'productos');
        getDocs(querySnapshot)
            .then(res => {
                res.docs.forEach(doc => {
                    doc.data().items.forEach(item => {
                        if (item.id === id) {
                            setItem(item);
                        }
                    })
                });
            })
            .catch(err => console.log(err));
    }, [id]);

    return (
        <TarjetaItem item={item} />
    )
}

export default ItemDetailContainer;