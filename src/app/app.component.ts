import { PhotoService } from './photos/photo/photo.service';
import { Component, Injectable } from '@angular/core';
import {Photo} from './photos/photo/photo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  photos: Photo [] = [];
  // declaro a variavel com o tipo 'Object [] = [];'

  constructor (photoService: PhotoService) {
    photoService
      .listFromUser('flavio')
      .subscribe(photos => this.photos = photos);
  }


}
