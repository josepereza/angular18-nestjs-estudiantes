import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Profesor } from '../interfaces/profesor';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }

  http=inject(HttpClient)

  createProfesor(profesor:Profesor){
return this.http.post('http://localhost:3000/profesores', profesor)
  }
}
