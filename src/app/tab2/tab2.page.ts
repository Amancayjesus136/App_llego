import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  amigos: Observable<any[]>;
  firestore: Firestore = inject(Firestore);

  constructor(private http: HttpClient, private route: Router) {
  
  let user = localStorage.getItem('user');
  if (user == null) {
    this.route.navigate(['/login']);
  }

  const eventoCollection = collection(this.firestore, 'amigos');
    this.amigos = collectionData(eventoCollection);

  // constructor(private http: HttpClient, private route: Router) {
  //   this.http.get<any>('http://localhost:3000/amigos/listado')
  //     .subscribe(data => {
  //       console.log('amigos', data);
  //       this.amigos = data.amigos;
  //     });
  // }

}

  abrirRegistraramigo() {
    this.route.navigate(['/registraramigo']);
  }
  
}
