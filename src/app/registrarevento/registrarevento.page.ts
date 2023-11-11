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
  eventos: any = []; // Assuming you have an events array to store the response

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

    let url = 'http://localhost:3000/eventos/registrar'; // Removed the quotes around 'url'

    this.http.post(url, valores).subscribe(data => {
      console.log('respuesta', data);
    });
  }

}
