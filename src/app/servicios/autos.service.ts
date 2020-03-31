import { Automovil } from './../modelo';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutosService {
  private autosURL = 'https://catalogo-autos.herokuapp.com/api/autos';
  constructor( private http: HttpClient ) { }

  getAutos(): Observable<any> {
    return this.http.get<any>(this.autosURL);
  }

  updateAuto(auto: Automovil): Observable<any> {
    return this.http.put<any>(`${this.autosURL}/${auto._id}`, auto);
  }

  agregarAuto(auto: Automovil): Observable<any> {
    return this.http.post(this.autosURL, auto);
  }

  deleteAuto(auto: Automovil): Observable<any> {
    return this.http.delete(`${this.autosURL}/${auto._id}`);
  }

}
