import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PhotosModule } from './photos/photos.module';
import { HttpClientModule } from '@angular/common/http';
// BOA PRATICA Primeiro os importes do angular

// Segundo os importes feitos por mim

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    PhotosModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// declarations: fica os componentes que quero importar
// imports: ficam os modulos
