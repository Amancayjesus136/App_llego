import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
  eventos: any = []; 

  constructor(private http: HttpClient) {}

  ngOnInit() {
  }

  guardar() {
    let valores = {
      'nombre': this.nombre,
      'fecha': this.fecha,
      'lugar': this.lugar,
      'notas': this.notas
    };

    let url = 'http://localhost:3000/eventos/registrar';

    this.http.post(url, valores).subscribe(data => {
      console.log('respuesta', data);
    });
  }

}
