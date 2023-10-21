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
    this.http.get<any>('assets/eventos.json')
      .subscribe(data => {
        console.log('eventos', data);
        this.eventos = data.eventos;
      });
  }

  verdetalle(evento: any){
    this.route.navigate(['/evento/'+evento.id])
  }

}
