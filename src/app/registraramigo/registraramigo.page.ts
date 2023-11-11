import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-registraramigo',
  templateUrl: './registraramigo.page.html',
  styleUrls: ['./registraramigo.page.scss'],
})
export class RegistraramigoPage implements OnInit {
  nombre_completo: any = '';
  telefono: any = '';
  cumpleanos: any = '';

   constructor(private http: HttpClient) {}

  ngOnInit() {
  }

  guardar() {
    let data = {
      'nombre_completo': this.nombre_completo,
      'telefono': this.telefono,
      'cumpleanos': this.cumpleanos,
    }
    let url = 'http://localhost:3000/amigos/registrar';

    this.http.post(url, data).subscribe(data => {
      console.log('respuesta', data);
    });
  };

}


