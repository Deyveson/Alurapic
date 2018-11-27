import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { PhotosModule } from './photos/photos.module';
import {AppRoutingModule} from './app.routing.module';
import {ErrorsModule} from './errors/errors.module';
// BOA PRATICA Primeiro os importes do angular

// Segundo os importes feitos por mim

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    PhotosModule,
    AppRoutingModule,
    ErrorsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
