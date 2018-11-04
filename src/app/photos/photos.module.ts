import { NgModule } from "@angular/core";
import { PhotoComponent } from "./photo/photo.component";

@NgModule({
  declarations: [PhotoComponent],
  exports: [PhotoComponent]
})
// '@NgModule transforma a classe em um modulo'
// 'declarations: os componentes se enxergam. exemplo Private'
// 'export: para quem importa o modulo, quais componentes ele vai ter acesso. exemplo Public'

export class PhotosModule {

}
