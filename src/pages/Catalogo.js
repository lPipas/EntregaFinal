import React, { useEffect, useState } from 'react'
import ItemListContainer from '../components/ItemListContainer'

import '../styles/catalogo.css';

import { getFirestore, collection, getDocs } from 'firebase/firestore'

function Catalogo() {

    const [productos, setProductos] = useState([]);

    useEffect(() => {
        const db = getFirestore();
        const querySnapshot = collection(db, 'productos');
        getDocs(querySnapshot)
            .then(res => {
                let dummyArr = [];
                res.docs.forEach(doc => {
                    dummyArr.push(doc.data())
                });
                setProductos(dummyArr);
                console.log(dummyArr);
            })
            .catch(err => console.log(err));
    }, [])

    return (
        <>
            {
                productos?.map((producto, index) => <ItemListContainer key={index} producto={producto} />)
            }
        </>
    )
}

export default Catalogo;