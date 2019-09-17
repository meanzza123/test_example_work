import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../../service/rest-api.service';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.scss']
})
export class PersonsComponent implements OnInit {
  Person: any = [];
  bmi: number;
  private calbmi: any;
  private textShow: any;
  private classColor: any;

  constructor(public restApi: RestApiService
  ) { }

  ngOnInit() {
    this.loadPersons()
  }

  // Get employees list
  loadPersons() {
    return this.restApi.getPersons().subscribe((data: {}) => {
      this.Person = data;
      console.log(this.textShow);
    });
  }
  // Delete employee
  deletePerson(id) {
    if (window.confirm('Are you sure, you want to delete?')) {
      this.restApi.deletePerson(id).subscribe(data => {
        this.loadPersons();
      });
    }
  }


}
