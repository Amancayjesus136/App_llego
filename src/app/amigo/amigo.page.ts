import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-amigo',
  templateUrl: './amigo.page.html',
  styleUrls: ['./amigo.page.scss'],
})
export class AmigoPage implements OnInit {

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
