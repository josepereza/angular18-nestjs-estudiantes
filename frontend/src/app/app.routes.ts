import { Routes } from '@angular/router';
import { ProfesoresComponent } from './pages/profesores/entradas.component';

export const routes: Routes = [
    {path:'', redirectTo:'profesores', pathMatch:'full'},
    {path:'profesores', component:ProfesoresComponent}
];
