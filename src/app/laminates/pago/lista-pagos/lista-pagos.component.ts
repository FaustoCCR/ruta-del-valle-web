import { Component, OnInit } from '@angular/core';
import { Pago } from '../pago';
import { PagoService } from '../services/pago.service';

@Component({
  selector: 'app-lista-pagos',
  templateUrl: './lista-pagos.component.html',
  styleUrls: ['./lista-pagos.component.css']
})
export class ListaPagosComponent implements OnInit {

  pagos:Pago[] = [];

  constructor(private pagoService:PagoService) { }

  ngOnInit(): void {
    this.listarPagos();
  }

  listarPagos(){

    this.pagoService.obtenerPagos()
    .subscribe(data =>{

      this.pagos = data;
    })

  }


  generarReportePDF(id_reserva:number){

    this.pagoService.generateReport(id_reserva).subscribe(
      response =>{

        this.managePdfFile(response,`Reporte Pago_Reserva ${id_reserva}`);
        
      }
    );
    
  }

  managePdfFile(response:any, fileName: string): void{

    const dataType = response.type;
    const binaryData = [];
    binaryData.push(response);

    const filePath = window.URL.createObjectURL(new Blob (binaryData, {type: dataType}));
    const downloadLink = document.createElement('a');
    downloadLink.href = filePath;
    downloadLink.setAttribute('download',fileName);
    document.body.appendChild(downloadLink);
    downloadLink.click();

  }

}
