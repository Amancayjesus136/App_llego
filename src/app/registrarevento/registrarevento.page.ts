import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registrarevento',
  templateUrl: './registrarevento.page.html',
  styleUrls: ['./registrarevento.page.scss'],
})
export class RegistrareventoPage implements OnInit {

  nombre: any = '';
  fecha: any = '';
  lugar: any = '';
  notas: any = '';

  constructor() { }

  ngOnInit() {
  }

  guardar() {
    let data = {
      'nombre': this.nombre,
      'fecha': this.fecha,
      'lugar': this.lugar,
      'notas': this.notas
    }
    console.log(data);
  };

}
