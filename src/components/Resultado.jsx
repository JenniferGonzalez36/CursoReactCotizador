import React, { useCallback, useRef } from 'react'
import useCotizador from '../hooks/useCotizador';
import { MARCAS, PLANES } from '../constants';

const Resultado = () => {

    const { resultado, datos } = useCotizador();
    const { marca, plan, year } = datos;

    if(resultado == 0) return null;

  return (
    <div className='bg-gray-100 text-center mt-5 p-5 shadow'>
        <h2 className='text-gray-600 font-black text-3xl'>Resumen</h2>
        <p className='my-2'>
            <span className='font-bold'>Marca: </span>
            {useCallback( 
                MARCAS.find(objeto => (objeto.id).toString() === marca).nombre, 
                [resultado]
            )}
        </p>
        <p className='my-2'>
            <span className='font-bold'>Plan: </span>
            {useCallback(
                PLANES.find(objeto => (objeto.id).toString() === plan).nombre,
                [resultado]
            )}
        </p>
        <p className='my-2'>
            <span className='font-bold'>Año del auto: </span>
            {useRef(year).current}
        </p>
        <p className='text-2xl my-2'>
            <span className='font-bold'>Total Cotización: </span>
            { resultado }
        </p>
    </div>
  )
}

export default Resultado