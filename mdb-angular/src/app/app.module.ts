
// Routing module for router service
import { AppRoutingModule } from './app-routing.module';
// HttpClient module for RESTful API
import { HttpClientModule } from '@angular/common/http';
// Forms module
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
// MDBBootstrap
import { MDBBootstrapModule } from 'angular-bootstrap-md';
// Components
import { PersonsComponent } from './components/persons/persons.component';
import { PersonComponent, DialogOverview } from './components/persons/person/person.component';
import { PersonEditComponent } from './components/persons/person-edit/person-edit.component';
import { DemoMaterialModule } from './material-module';
@NgModule({
  declarations: [
    AppComponent,
    PersonsComponent,
    PersonComponent,
    PersonEditComponent,
    DialogOverview
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    DemoMaterialModule,
    ReactiveFormsModule,
  ],
  providers: [],
  entryComponents: [PersonComponent, DialogOverview],
  bootstrap: [AppComponent]
})
export class AppModule { }
