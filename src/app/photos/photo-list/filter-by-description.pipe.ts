import {Pipe, PipeTransform} from '@angular/core';
import {Photo} from '../photo/photo';

@Pipe({name: 'filterByDescription'})
export class FilterByDescription implements PipeTransform{
  transform(photos: Photo[], descriptionQuery: string){
    descriptionQuery = descriptionQuery
      .trim()
      .toLowerCase();

    if (descriptionQuery) {
      return photos.filter(photo =>
        photo.description.toLowerCase().includes(descriptionQuery)
      );
    } else {
      return photos;
    }
    // Pega essa lista de Photo, pra cada photo pega a description que ela tem, joga pra lowercase, e ve nessa string tem o que digitei.
    // se tem ele entra na lista do filter,
  }
}
