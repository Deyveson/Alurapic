import { NgModule } from "@angular/core";
import { PhotoComponent } from "./photo/photo.component";
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [PhotoComponent],
  exports: [PhotoComponent],
  imports: [HttpClientModule]
})
// '@NgModule transforma a classe em um modulo'
// 'declarations: os componentes se enxergam. exemplo Private'
// 'export: para quem importa o modulo, quais componentes ele vai ter acesso. exemplo Public'

export class PhotosModule {

}
