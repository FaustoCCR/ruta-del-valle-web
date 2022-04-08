export interface Reserva {

  id_reserva:number;
  cliente:string;
  num_habitacion:number;
  tipo_habitacion:string;
  descripcion:string;
  planta:string;
  estado:string;
  adultos:number;
  ninos:number;
  precio_noche:number;
  costo_alojamiento:number;
  fecha_reserva:Date;
  fecha_ingreso:Date;
  fecha_salida:Date;
  observaciones:string;

}
