import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';

import { PhotoComponent } from './photo/photo.component';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { PhotoFormComponent } from './photo-form/photo-form.component';

@NgModule({
  declarations: [
    PhotoComponent,
    PhotoListComponent,
    PhotoFormComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule
  ]
})
// '@NgModule transforma a classe em um modulo'
// 'declarations: os componentes se enxergam. exemplo Private'
// 'export: para quem importa o modulo, quais componentes ele vai ter acesso. exemplo Public'
export class PhotosModule {}
