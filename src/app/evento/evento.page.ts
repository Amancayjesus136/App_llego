import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-evento',
  templateUrl: './evento.page.html',
  styleUrls: ['./evento.page.scss'],
})
export class EventoPage implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private http : HttpClient
    ) {
        this.route.params.subscribe(params => {
          console.log(params['id']);
     });
    }

  ngOnInit() {
  }

}
