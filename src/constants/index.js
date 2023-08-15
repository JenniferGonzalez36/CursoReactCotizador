export const MARCAS = [
    { id: 1, nombre: 'Europeo', incremento: 1.3 },
    { id: 2, nombre: 'Americano', incremento: 1.15 },
    { id: 3, nombre: 'Asiático', incremento: 1.05 }
]

const YEARMAX = new Date().getFullYear();
export const YEARS = Array.from(
    new Array(YEARMAX - 1999), (valor, index) => YEARMAX - index
);

export const PLANES = [
    { id: 1, nombre: 'Básico', incremento: 1.2 },
    { id: 2, nombre: 'Completo', incremento: 1.5 }
]