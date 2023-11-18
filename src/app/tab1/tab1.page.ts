import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router  } from '@angular/router';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  eventos: any = [];

  constructor(private http: HttpClient, private route: Router) {

      //validamos si estamos logueados antes de traer los eventos

    let user = localStorage.getItem('user');
    if (user == null) {
      this.route.navigate(['/login']);
    }


    this.http.get<any>('http://localhost:3000/eventos/listado')
      .subscribe(data => {
        console.log('eventos', data);
        this.eventos = data.eventos;
      });
  }

  abrirRegistrarevento() {
    this.route.navigate(['/registrarevento']);
  }

  verdetalle(evento: any){
    this.route.navigate(['/evento/'+evento._id])
  }

}
