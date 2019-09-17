import { Component, OnInit } from '@angular/core';
import { RestApiService } from './../../../service/rest-api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-person-edit',
  templateUrl: './person-edit.component.html',
  styleUrls: ['./person-edit.component.scss']
})
export class PersonEditComponent implements OnInit {
  id = this.actRoute.snapshot.params['id'];
  personData: any = {};

  constructor(
    public restApi: RestApiService,
    public actRoute: ActivatedRoute,
    public router: Router
  ) {
  }

  ngOnInit() {
    this.restApi.getPerson(this.id).subscribe((data: {}) => {
      this.personData = data;
    });
  }

  // Update employee data
  updatePerson() {
    if (window.confirm('Are you sure, you want to update?')) {
      this.restApi.updatePerson(this.id, this.personData).subscribe(data => {
        this.router.navigate(['/persons']);
      });
    }
  }
}
