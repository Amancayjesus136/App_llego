import { Component, OnInit, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Firestore, addDoc, collection } from '@angular/fire/firestore';

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

  notificar: boolean = false;
  firestore: Firestore = inject(Firestore);

  botones = [
    {
      text: 'Regresar',
      handler: () => {
        this.route.navigate(['/tabs/tab1']);
      },
    },
  ];

  constructor(
    private http: HttpClient,
    private route: Router) {}

  ngOnInit() {
  }

  guardar() {
    let valores = {
      'nombre': this.nombre,
      'fecha': this.fecha,
      'lugar': this.lugar,
      'notas': this.notas
    };

    console.log(valores);

    addDoc(collection(this.firestore, "eventos"), valores);
    this.notificar = true;
    
    

    // let url = 'http://localhost:3000/eventos/registrar';

    // this.http.post(url, valores).subscribe(data => {
    //   console.log('respuesta', data);

    //   this.notificar = true;
    // });
  }

}
