import React from 'react'
import Formulario from './Formulario';
import useCotizador from '../hooks/useCotizador';
import Spinner from './Spinner';
import Resultado from './Resultado';

const AppSeguro = () => {

  const { cargando } = useCotizador();

  return (
    <>
        <header className='my-10'>
            <h1 className='text-white text-center text-4xl font-black'>Cotizador de Seguros de Auto 🚗🔒</h1>
            <h2 className="text-2xl text-center font-bold text-pink-300 mb-8">~ Por: Jennifer González ~</h2>
            <a href="https://jg36software.com/my-software.php?item=24-react" className="m-5 bg-pink-600 p-3 rounded-full text-white font-bold uppercase hover:bg-indigo-700 cursor-pointer transition-all" >⬅ Regresar a mi página</a>

        </header>

        <main className='bg-white md:w-2/3 lg:w-1/2 mx-auto shadow rounded-lg p-10'>
            <Formulario />
            {cargando ? <Spinner /> : <Resultado />}
        </main>
    </>
  )
}

export default AppSeguro