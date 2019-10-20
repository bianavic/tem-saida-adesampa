export default interface Ifilhos {
    possuiFilho: boolean;
    filho: Ifilhoquanty[];
}

interface Ifilhoquanty{
    nome: string;
    idade: number;
}