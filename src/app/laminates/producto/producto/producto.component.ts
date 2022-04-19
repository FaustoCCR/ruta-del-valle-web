import { Component, OnInit } from '@angular/core';
import { TokenService } from '../../security/service/token.service';
import { Producto } from '../producto';
import { ProductosService } from '../productos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  productos: Producto[];
  roles: string[];
  isAdmin = false;

  constructor(private productosService: ProductosService,
    private tokenService:TokenService) { }

  ngOnInit(): void {
    this.obtenerProducto();
    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach(rol => {
      if (rol === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    });
  }

  private obtenerProducto(){
    this.productosService.obtenerProducto().subscribe(data => {
      this.productos = data;
    });
  }

  eliminarProducto(id:number){
    this.productosService.eliminarProducto(id).subscribe(() => {
      
      Swal.fire({
        icon: 'success',
        title: `Eliminado`
      })

      this.obtenerProducto();
      
    })
  }

}
