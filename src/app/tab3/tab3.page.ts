import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router  } from '@angular/router';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  empresas: Observable<any[]>;
  firestore: Firestore = inject(Firestore);

  constructor(private http: HttpClient, private route: Router) {
  
  let user = localStorage.getItem('user');
  if (user == null) {
    this.route.navigate(['/login']);
  }

  const empresaCollection = collection(this.firestore, 'empresas');
  this.empresas = collectionData(empresaCollection, {idField: '_id'});

  // constructor(private http: HttpClient, private route: Router) {
  //   this.http.get<any>('http://localhost:3000/amigos/listado')
  //     .subscribe(data => {
  //       console.log('amigos', data);
  //       this.amigos = data.amigos;
  //     });
  // }

}

  abrirRegistraramigo() {
    this.route.navigate(['/registrarempresa']);
  }

  verdetalleempresa(empresas: any) {
    this.route.navigate(['/empresas/' + empresas._id]);
  }
  
  
  
}
