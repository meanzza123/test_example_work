import { Component, OnInit, Input, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiService } from './../../../service/rest-api.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Person } from './../../../model/person';
import { FormControl, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent {
  personForm: NgForm;
  constructor(public restApi: RestApiService, public router: Router, public dialog: MatDialog) { }

  bmiText: string;
  public valueBmi = 'hide';
  bmi: number;
  private calbmi: any;
  private textShow: any;
  private classColor: any;

  @Input() personDetails = { name: '', height: '', weight: '', bmi: '' };
  onKey(event: any) {
    this.bmiText = event.target.value;
    if (Number(this.bmiText)) {
      this.valueBmi = 'show';
      this.calculatorBmi();
    } else {
      this.valueBmi = 'hide';
    }
  }
  calculatorBmi(): void {
    this.calbmi = (Number(this.personDetails.weight) / ((Number(this.personDetails.height) / 100) * (Number(this.personDetails.height) / 100))).toFixed(2);

    switch (true) {
      case this.calbmi < 18.5:
        this.classColor = 'red-text';
        this.textShow = 'น้ำหนักน้อยกว่ามาตรฐาน';
        break;

      case this.calbmi >= 18.5 && this.calbmi <= 22.9:
        this.classColor = 'green-text';
        this.textShow = 'ปกติ';
        break;

      case this.calbmi >= 23 && this.calbmi <= 29.9:
        this.classColor = 'light-blue-text';
        this.textShow = 'อ้วนระดับ2';
        if (this.calbmi <= 24.9) {
          this.textShow = 'อ้วนระดับ1';
        }
        break;

      case this.calbmi >= 30:
        this.classColor = 'blue-text';
        this.textShow = 'อ้วนระดับ3';
        break;
    }

  }

  openDialog(): void {

    const dialogRef = this.dialog.open(DialogOverview, {
      width: '460px',
      height: 'auto',
      data: {
        name: this.personDetails.name, height: this.personDetails.height,
        weight: this.personDetails.weight, bmi: this.calbmi, textShow: this.textShow, classColor: this.classColor
      }
    });
  }
  ngOnInit() {
  }
  Register(regForm: NgForm) {
    console.log(regForm);
  }

}



// Modal doalog
@Component({
  selector: 'dialog-overview',
  templateUrl: 'dialog-overview.html',
})
export class DialogOverview {
  constructor(
    public dialogRef: MatDialogRef<DialogOverview>,
    @Inject(MAT_DIALOG_DATA) public data: Person,
    public restApi: RestApiService, public router: Router,
    public dialog: MatDialog) {
    dialogRef.disableClose = true;
  }

  onNoClick(): void {
    this.dialogRef.close();
    this.dialogRef.afterClosed().subscribe(result => { });
  }

  addPerson(dataPerson) {
    this.restApi.createPerson(this.data).subscribe((data: {}) => {
      this.router.navigate(['/persons']);
    });

  }






}

