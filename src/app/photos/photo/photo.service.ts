import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Photo} from './photo';

const API = 'http://localhost:3000';

@Injectable ({ providedIn: 'root' })
export class PhotoService {

  constructor (private http: HttpClient){
  }

  listFromUser(userName){

    return this.http
    .get<Photo[]>( API + '/' + userName + '/photos')
    // .get metodo, vai nesse endereço quero os dados, que são do tipo 'Object[]'

  }

  listFromUserPaginated(userName, page:number){
    const params = new HttpParams()
      .append('page', page.toString());

    return this.http
      .get<Photo[]>( API + '/' + userName + '/photos', {params});
  }
}
