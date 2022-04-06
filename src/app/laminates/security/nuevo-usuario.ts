export class NuevoUsuario {

  dni:string;
  nombre:string;
  email:string;
  telefono:string;
  username:string;
  password:string;
  estado:boolean;
  rol:string;

  /* authorities: string[] */

  constructor(dni:string,nombre:string,email:string,telefono:string,username:string,password:string,estado:boolean,rol:string){
    this.dni = dni;
    this.nombre = nombre;
    this.email = email;
    this.telefono = telefono;
    this.username = username;
    this.password = password;
    this.estado = estado;
    this.rol= rol;
  }


}
