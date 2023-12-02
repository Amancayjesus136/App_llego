import { Component, OnInit, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Firestore, addDoc, collection } from '@angular/fire/firestore';

@Component({
  selector: 'app-registrarempresa',
  templateUrl: './registrarempresa.page.html',
  styleUrls: ['./registrarempresa.page.scss'],
})
export class RegistrarempresaPage implements OnInit {
  nombre: any = '';
  direccion: any = '';
  numero_empleado: any = '';
  tipo: any = '';
  estado: any = '';

  notificar: boolean = false;
  firestore: Firestore = inject(Firestore);

  botones = [
    {
      text: 'Regresar',
      handler: () => {
        this.route.navigate(['/tabs/tab3']);
      },
    },
  ];

  constructor(
    private http: HttpClient,
    private route: Router) {}

  ngOnInit() {
  }

  guardar() {
    let data = {
      'nombre': this.nombre,
      'direccion': this.direccion,
      'numero_empleado': this.numero_empleado,
      'tipo': this.tipo,
      'estado': this.estado,
    };

    console.log(data);

    addDoc(collection(this.firestore, "empresas"), data);
    this.notificar = true;


    // let url = 'http://localhost:3000/amigos/registrar';

    // this.http.post(url, data).subscribe(data => {
    //   console.log('respuesta', data);

    //   this.notificar = true;
    // });
  };

}


