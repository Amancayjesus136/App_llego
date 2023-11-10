import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registraramigo',
  templateUrl: './registraramigo.page.html',
  styleUrls: ['./registraramigo.page.scss'],
})
export class RegistraramigoPage implements OnInit {
  nombre_completo: any = '';
  telefono: any = '';
  cumpleanos: any = '';

  constructor() { }

  ngOnInit() {
  }

  guardar() {
    let data = {
      'nombre_completo': this.nombre_completo,
      'telefono': this.telefono,
      'cumpleanos': this.cumpleanos,
    }
    console.log(data);
  };

}


