import { Component, OnInit } from '@angular/core';
import {Photo} from '../photo/photo';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  photos: Photo [] = [];
  // declaro a variavel com o tipo 'Object [] = [];'

  filter: string = '';

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.photos = this.activatedRoute.snapshot.data['photos'];
  }
}
