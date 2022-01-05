import React, { useState, useEffect } from "react";

export default props => {
    let [contador, setContador] = useState(100)
    let [status, setStatus] = useState('Par')
    useEffect(()=>{
        contador % 2 === 0 ? setStatus('Par') : setStatus('Impar')
    })

    return (
        <div>
            <h1>{contador}</h1>
            <h3>{status}</h3>
            <button onClick={(e) => setContador(contador+1)}>Inc</button>
            <button onClick={(e) => setContador(contador-1)}>Dec</button>
        </div>
    )
}