import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login';
import { CoursesComponent } from './courses';
import { AddEditComponent } from './add-edit-course';
import { NoContentComponent } from './no-content';

import { DataResolver } from './app.resolver';


export const ROUTES: Routes = [
  { path: '',            component: LoginComponent },
  { path: 'login',       component: LoginComponent },
  { path: 'courses',     component: CoursesComponent}, 
  { path: 'courses/new', component: AddEditComponent },
  { path: 'courses/:id', component: AddEditComponent },  
  { path: '**',          component: NoContentComponent },
];
