import { Automovil } from './../modelo';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { MessagesService } from './messages.service';

@Injectable({
  providedIn: 'root'
})
export class AutosService {
  private autosURL = 'https://catalogo-autos.herokuapp.com/api/autos';
  constructor( private http: HttpClient, private messagesService: MessagesService ) { }

  getAutos(): Observable<any> {
    return this.http.get<any>(this.autosURL).pipe(
         catchError(this.handlEerror<any>('getAutos')),
         tap( () => this.messagesService.add('Productos Obtenidos'))
       );
  }

  updateAuto(auto: Automovil): Observable<any> {
    return this.http.put<any>(`${this.autosURL}/${auto._id}`, auto).pipe(
      catchError(this.handlEerror<any>('updateAuto')),
      tap((result) => {
        console.log(result);
        this.messagesService.add(`Auto editado con ID = ${result.data._id}`);
      })
    );
  }

  agregarAuto(auto: Automovil): Observable<any> {
    return this.http.post(this.autosURL, auto).pipe(
      catchError(this.handlEerror<any>('agregarAuto')),
      tap((result) => {
        console.log(result);
        this.messagesService.add(`Auto creado con ID = ${result.data._id}`);
      })
    );
  }

  deleteAuto(auto: Automovil): Observable<any> {
    return this.http.delete(`${this.autosURL}/${auto._id}`).pipe(
      catchError(this.handlEerror<any>('deleteAuto')),
      tap(() => {
        console.log(auto);
        this.messagesService.add(`Auto eliminado con ID = ${auto._id}`);
      })
    );
  }

  private handlEerror<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      this.messagesService.add(`${operation} fallo: ${error.message}`);
      return of(result as T);
    };
  }

}
