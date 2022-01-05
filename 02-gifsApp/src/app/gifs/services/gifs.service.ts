import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGifsResponse } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'//evita que tengamos que especificarlo en los providers de los módulos.
})
export class GifsService {

  private _historial: string[]=[];

  private API_KEY: string = 'foQl4dORUbwuJYUvEmoLpJpzxRoXyUoS';

  private servicioUrl : string = 'https://api.giphy.com/v1/gifs';

  public resultados: Gif[] =[];


  get historial(): string[]{
    return [...this._historial];
  }

  buscarGifs(query: string){
    query = query.trim().toLowerCase();
    if(!this._historial.includes(query)){
      this._historial.unshift(query);
      console.log(this._historial);
      this._historial = this._historial.splice(0,10);

      localStorage.setItem('historial', JSON.stringify(this._historial));

    }

    const params = new HttpParams()
      .set('api_key', this.API_KEY)
      .set('limit', '10')
      .set('q',query);

    this.http.get<SearchGifsResponse>(`${this.servicioUrl}/search`,{params})
    .subscribe((resp)=>{
      console.log(resp.data);
      this.resultados = resp.data;
      localStorage.setItem('resultados', JSON.stringify(this.resultados));
    });
    
  }

  constructor(private http: HttpClient) {
    if(localStorage.getItem('historial')){
      this._historial = JSON.parse(localStorage.getItem('historial')!); // el ! es para indicarle a angular que confie en nosotros.
    }

    if(localStorage.getItem('resultados')){
      this.resultados = JSON.parse(localStorage.getItem('resultados')!);
    }
  }
}
