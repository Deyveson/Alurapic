import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent {

  @Input()  description = '';
  @Input()  url = '';
  //  é preciso indicar com  "@Input", para que essas propriedades possam
  //  receber parametros de fora.

}
