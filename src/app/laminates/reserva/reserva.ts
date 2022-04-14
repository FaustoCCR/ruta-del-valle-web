export class Reserva {

  id_reserva:number;
  dni:string;
  cliente:string;
  id_habitacion?:number;
  num_habitacion:number;
  tipo_habitacion:string;
  descripcion:string;
  planta:string;
  estado:string;
  adultos:number;
  ninos:number;
  precio_noche:number;
  costo_alojamiento:number;
  fecha_reserva:string;
  fecha_ingreso:string;
  fecha_salida:string;
  observaciones:string;
  

  /* constructor para reservas
  constructor(dni:string, id_habitacion:number,
    fecha_ingreso:Date,
    fecha_salida:Date,
    adultos:number,
    ninos:number,
    costo_alojamiento:number,
    observaciones:string,
    estado:string){

      this.cliente = dni,
      this.id_habitacion = id_habitacion;
      this.fecha_ingreso = fecha_ingreso;
      this.fecha_salida = fecha_salida;
      this.adultos = adultos;
      this.ninos = ninos;
      this.costo_alojamiento = costo_alojamiento;
      this.observaciones = observaciones;
      this.estado = estado;

  }*/
  

}
