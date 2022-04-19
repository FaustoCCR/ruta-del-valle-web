import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from 'src/app/laminates/producto/producto';
import { ProductosService } from 'src/app/laminates/producto/productos.service';
import { Consumo } from '../../consumo-producto/consumo';
import { ConsumoService } from '../../consumo-producto/consumo.service';

@Component({
  selector: 'app-detalle-consumo',
  templateUrl: './detalle-consumo.component.html',
  styleUrls: ['./detalle-consumo.component.css']
})
export class DetalleConsumoComponent implements OnInit {

 

  constructor(
    private activaRoute:ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  cargarProducto():void{
    
  }








}
