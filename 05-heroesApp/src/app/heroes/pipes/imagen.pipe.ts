import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interface/Heroe';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(heroe: Heroe): string {
    
    if(!heroe.id){
      try{
        return `/assets/no-image.png/`;
      }catch(error){
        return `/assets/heroes/${heroe.id}.jpg`;
      }
      
    }
    return `/assets/heroes/${heroe.id}.jpg`;
    

    
    
  }

}
