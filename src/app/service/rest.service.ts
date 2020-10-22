import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable} from 'rxjs';
import{Noticia} from '../models/Noticia'
import { map } from 'rxjs/operators';

@Injectable()
export class RestService {

  //endpoint = 'http://localhost:3000/api/v1/';

  private url = 'http://localhost:3000/api/noticias';

  constructor(private http: HttpClient) { }

  obtenerNoticias(): Observable<Noticia[]> {
    const url = `${this.url}`;
    return this.http.get<Noticia[]>(url);
  }

  CrearNoticia(news: Noticia): Observable<Noticia> {
    const url = `${this.url}`;
    return this.http.post<Noticia>( url, news);
  }

}
