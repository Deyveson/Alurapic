import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {Photo} from '../../photo/photo';

@Component({
  selector: 'ap-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnChanges {

  @Input() photos: Photo[] = [];
  rows: any[] = [];

  constructor() { }

  groupColumns(photos: Photo[]){
    const newRows = [];
    for(let index = 0; index < photos.length; index+=3){
      newRows.push(photos.slice(index, index + 3))
    }
    // O primeiro parâmetro de slice é a posição inclusive na qual os elementos serão considerados. O segundo é a posição final (não inclusiva).
    return newRows;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes.photos)
      this.rows = this.groupColumns(this.photos);
  }

}
