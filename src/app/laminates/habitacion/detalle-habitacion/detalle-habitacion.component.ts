import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';
import {Consumo}

@Component({
  selector: 'app-detalle-habitacion',
  templateUrl: './detalle-habitacion.component.html',
  styleUrls: ['./detalle-habitacion.component.css']
})
export class DetalleHabitacionComponent implements OnInit {

  consumo: Consumo=new Consumo();
  constructor() { }

  ngOnInit(): void {
  }

}
