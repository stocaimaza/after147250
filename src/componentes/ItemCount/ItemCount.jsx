import React from 'react';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

const ItemCount = ({ stock }) => {
    const [contador, setContador] = useState(1);

    const incrementar = () => {
        if (contador < stock) {
            setContador(contador + 1);
        }
    }

    const decrementar = () => {
        if (contador > 1) {
            setContador(contador - 1);
        }
    }

    return (
        <div className='container'>
            <Button variant="secondary" onClick={decrementar}> - </Button>
            <p> {contador} </p>
            <Button variant="secondary" onClick={incrementar}> + </Button>
            <br /><br /><br />
        </div>
    )
}

export default ItemCount