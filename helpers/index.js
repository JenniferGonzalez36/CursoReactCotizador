export function obtenerDiferenciaYear(year){
    return new Date().getFullYear() - year;
}

export function formatearDinero(cantidad){
    return cantidad.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
    })
}
