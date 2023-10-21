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
    
    /* LLAMAMOS NUEVAMENTE A TODO EL JSON DE EVENTOS*/

    this.http.get<any>('assets/eventos.json')
      .subscribe(data => {

        const results = data.eventos.filter((obj: {id: string;}) => {
          return obj.id === evento_id;
        });
      console.log(results[0])
      this.evento = results[0];
      })

    /* LLAMAMOS NUEVAMENTE A TODO EL JSON DE EVENTOS*/
  });
}

  ngOnInit() {
  }

}
