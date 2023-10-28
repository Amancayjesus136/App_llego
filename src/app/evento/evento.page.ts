import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-evento',
  templateUrl: './evento.page.html',
  styleUrls: ['./evento.page.scss'],
})
export class EventoPage implements OnInit {

  evento : any = {}; 

  constructor(
    private route: ActivatedRoute,
    private http : HttpClient
    ) {
        this.route.params.subscribe(params => {
          const evento_id = params['id'];

          this.http.get<any>('http://localhost:3000/eventos/detalle/'
          + evento_id)
          .subscribe(data => {
            console.log('eventos', data);
          })
  });
}

  ngOnInit() {
  }

}
