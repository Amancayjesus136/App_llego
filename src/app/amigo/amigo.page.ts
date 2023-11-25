import { Component, OnInit, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Firestore, doc, docData } from '@angular/fire/firestore';

@Component({
  selector: 'app-amigo',
  templateUrl: './amigo.page.html',
  styleUrls: ['./amigo.page.scss'],
})
export class AmigoPage implements OnInit {

  amigo : any = {}; 
  firestore: Firestore = inject(Firestore);

  constructor(
    private route: ActivatedRoute,
    private http : HttpClient
  ) {
    this.route.params.subscribe(params => {
      const amigo_id = params['id'];

      const amigo = doc(this.firestore, 'amigos/'+ amigo_id);
      docData<any>(amigo).subscribe(data => {
        this.amigo = data;
      });

    });
  }

  ngOnInit() {
  }

}
