import React from 'react'

const Mensaje = ({saludo, dia, numero}) => {
  return (
    <>
        <h3> {saludo} </h3>
        <p> {dia} </p>
        <p> {numero} </p>
    </>
  )
}

export default Mensaje

