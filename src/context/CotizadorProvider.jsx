import { useState, createContext } from "react";
import { formatearDinero, obtenerDiferenciaYear } from "../../helpers";
import { MARCAS, PLANES } from "../constants";

const CotizadorContext = createContext();

const CotizadorProvider = ({ children }) => {

    const [datos, setDatos] = useState({
        marca: '',
        year: '',
        plan: ''
    });
    const [error, setError] = useState('');
    const [resultado, setResultado] = useState('0');
    const [cargando, setCargando] = useState(false);

    const handleChangeDatos = e => {
        setDatos({
            ...datos,
            [e.target.name] : e.target.value
        })
    }

    const cotizarSeguro = () => {
        let resultado = 2000;
        const diferencia = obtenerDiferenciaYear(datos.year);

        resultado -= (resultado * 0.03 * diferencia);
        if(resultado < 680) resultado = 680;

        resultado *= MARCAS.find(objeto => (objeto.id).toString() === datos.marca).incremento;
        
        resultado *= PLANES.find(objeto => (objeto.id).toString() === datos.plan).incremento;

        resultado = formatearDinero(resultado);

        setCargando(true);
        setTimeout(() => {
            setResultado(resultado);
            setCargando(false)
        }, 3000)
    }

    return(
        <CotizadorContext.Provider
            value={{
                datos, 
                handleChangeDatos,
                error,
                setError,
                cotizarSeguro,
                resultado,
                cargando
            }}
        >
            { children }
        </CotizadorContext.Provider>
    )
}

export { CotizadorProvider }
export default CotizadorContext;