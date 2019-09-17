import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonComponent } from './components/persons/person/person.component';
import { PersonEditComponent } from './components/persons/person-edit/person-edit.component';
import { PersonsComponent } from './components/persons/persons.component';

const routes: Routes = [
  { path: 'persons', component: PersonsComponent },
  { path: 'person', component: PersonComponent },
  { path: 'person-edit', component: PersonEditComponent },
  { path: 'person-edit/:id', component: PersonEditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
