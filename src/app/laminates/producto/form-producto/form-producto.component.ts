import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Producto } from '../producto';
import { ProductosService } from '../productos.service';

@Component({
  selector: 'app-form-producto',
  templateUrl: './form-producto.component.html',
  styleUrls: ['./form-producto.component.css']
})
export class FormProductoComponent implements OnInit {

  producto: Producto = new Producto();

  constructor(private productosService: ProductosService,
    private router: Router,
    private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.cargarProdcuto()
  }

  onCreate():void{
    this.activateRoute.params.subscribe(params =>{

      let id = params['id']
      if(id==null){
        /* si el no existe id en la url --> guardamos */
        this.productosService.crearProducto(this.producto)
        .subscribe(data =>{
          Swal.fire({
            icon: 'success',
            title: `${data.nombre}, creada con éxito`
          })
          this.router.navigate(['/productos']);
        },error => console.log(error));
      }else{
        /* caso contrario actualizamos el registro */
        this.productosService.update(id,this.producto)
        .subscribe(() =>{
          Swal.fire({
            icon: 'success',
            title: `Registro actualizado`
          })
          this.router.navigate(['/plantas']);
        })
      }

    })
  }

  cargarProdcuto(): void{
    this.activateRoute.params.subscribe(params =>{

      let id = params['id']
      if(id){
        this.productosService.obtenerProductoId(id)
        .subscribe((producto) => this.producto = producto);
      }
    })
  }

}
