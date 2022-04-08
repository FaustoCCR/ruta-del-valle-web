import { Component } from "@angular/core";

@Component({
selector: 'app-footer',
templateUrl:'./footer.component.html',
styleUrls:['./footer.component.css']

})


export class FooterComponent {
    autor:any={
        Nombre: 'Fausto', Apellido: 'Campoverde'
        ,Nombre1: 'Sebastian', Apellido1: 'Hidalgo'
        ,Nombre2: 'Gabriela', Apellido2: 'Vera'
        ,Nombre3: 'Mateo', Apellido3: 'Vidal'}
}
