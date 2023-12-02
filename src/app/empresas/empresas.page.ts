import { Component, OnInit, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Firestore, doc, docData } from '@angular/fire/firestore';

@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.page.html',
  styleUrls: ['./empresas.page.scss'],
})
export class EmpresasPage implements OnInit {

  empresas : any = {}; 
  firestore: Firestore = inject(Firestore);

  constructor(
    private route: ActivatedRoute,
    private http : HttpClient
    ) {

        this.route.params.subscribe(params => {
          const empresas_id = params['id'];

          const empresas = doc(this.firestore, 'empresas/'+ empresas_id);
          docData<any>(empresas).subscribe(data => {  
            this.empresas = data;
          });

          // this.http.get<any>('http://localhost:3000/eventos/detalle/'
          // + evento_id)
          // .subscribe(data => {
          //   console.log('eventos', data);
          //   this.evento = data.eventos;
          // })
  });
}

  ngOnInit() {
  }

}
