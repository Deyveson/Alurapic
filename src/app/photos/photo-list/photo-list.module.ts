import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PhotoModule} from '../photo/photo.module';
import {LoadButtonComponent} from './load-button/load-button.component';
import {FilterByDescription} from './filter-by-description.pipe';
import {PhotoListComponent} from './photo-list.component';
import {PhotosComponent} from './photos/photos.component';

@NgModule({
  declarations:[
    PhotoListComponent,
    PhotosComponent,
    LoadButtonComponent,
    FilterByDescription
  ],
  imports: [
    CommonModule,
    PhotoModule
  ]
})
export class PhotoListModule{}
