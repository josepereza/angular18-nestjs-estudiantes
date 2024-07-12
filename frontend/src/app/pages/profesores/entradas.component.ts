import { Component, inject } from '@angular/core';
import {FormBuilder, ReactiveFormsModule} from '@angular/forms';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-entradas',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './entradas.component.html',
  styleUrl: './entradas.component.css'
})
export class ProfesoresComponent {
 fb=inject(FormBuilder)
 apiService=inject(ApiService)
 profesorForm=this.fb.nonNullable.group({
  nombre:[''],
  apellido:[''],
  email:['']
 })

 submit(){
  console.log(this.profesorForm.value)
  this.apiService.createProfesor(this.profesorForm.value).subscribe(data=>{
    console.log(data)
  })

 }

}
