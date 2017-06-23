export class Docente{
    id: number;
    nombre: string;
    horario?:{
        lunes?: number[],
        martes?: number[],
        miercoles?: number[],
        jueves?: number[],
        viernes?: number[],
        sabado?: number[],
        domingo?: number[],
    };
    niveles?: string[]
}