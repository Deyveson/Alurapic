import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// BOA PRATICA Primeiro os importes do angular

import { AppComponent } from './app.component';
import { PhotosModule } from './photos/photos.module';
import {AppRoutingModule} from './app.routing.module';
import {ErrorsModule} from './errors/errors.module';
import {HomeModule} from './home/home.module';
// Segundo os importes feitos por mim

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    PhotosModule,
    AppRoutingModule,
    ErrorsModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
