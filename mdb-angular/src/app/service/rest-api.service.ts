import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Person } from '../model/person';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
  })

  export class RestApiService {
    // Define API
    apiURL = 'http://localhost:3000';

    constructor(private http: HttpClient) { }

    /*========================================
      CRUD Methods for consuming RESTful API
    =========================================*/

    // Http Options
    httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    // HttpClient API get() method => Fetch persons list
    getPersons(): Observable<Person> {
      return this.http.get<Person>(this.apiURL + '/persons')
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
    }

    // HttpClient API get() method => Fetch person
    getPerson(id): Observable<Person> {
      return this.http.get<Person>(this.apiURL + '/persons/' + id)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
    }

    // HttpClient API post() method => Create person
    createPerson(person): Observable<Person> {
      return this.http.post<Person>(this.apiURL + '/persons', JSON.stringify(person), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
    }

    // HttpClient API put() method => Update person
    updatePerson(id, person): Observable<Person> {
      return this.http.put<Person>(this.apiURL + '/persons/' + id, JSON.stringify(person), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
    }

    // HttpClient API delete() method => Delete person
    deletePerson(id) {
      return this.http.delete<Person>(this.apiURL + '/persons/' + id, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
    }

    // Error handling
    handleError(error) {
       let errorMessage = '';
       if (error.error instanceof ErrorEvent) {
         // Get client-side error
         errorMessage = error.error.message;
       } else {
         // Get server-side error
         errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
       }
       window.alert(errorMessage);
       return throwError(errorMessage);
    }
}
