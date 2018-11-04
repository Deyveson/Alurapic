import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  photos: Object [] = [];
  // declaro a variavel com o tipo 'Object [] = [];'

  constructor (http: HttpClient) {

    http
      .get<Object[]>('http://localhost:3000/flavio/photos')
      .subscribe(  photos => this.photos = photos );
      // 1 - .get metodo, vai nesse endereço quero os dados, que são do tipo 'Object[]'
      // 2 - .subscribe me inscrevo

  }


}
