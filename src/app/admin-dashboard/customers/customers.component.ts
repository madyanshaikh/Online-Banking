
import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';


/**
 * @title Stepper with customized states
 */
@Component({
  selector: 'app-Cusotmers',
  templateUrl: './Customers.component.html',
  styleUrls: ['./Customers.component.css'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {displayDefaultIndicatorType: false}
  }]
})
export class CustomersComponent implements OnInit {
  firstFormGroup!: FormGroup; 
  secondFormGroup!: FormGroup; 
  photoFilePath: any
  photoFileName: any

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
      first_1Ctrl: ['', Validators.required],
      first_2Ctrl: ['', Validators.required],
      first_3Ctrl: ['', Validators.required],
      first_4Ctrl: ['', Validators.required],
      first_5Ctrl: ['', Validators.required],
      first_6Ctrl: ['', Validators.required],
      first_7Ctrl: ['', Validators.required],
      first_8Ctrl: ['', Validators.required],
      first_9Ctrl: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  // uploadPhoto(event: { target: { files: any[]; }; })
  // {
  //   var file = event.target.files[0];
  //   const formData:FormData = new FormData();
  //   formData.append('uploadedfile',file,file.name);

  //   this.service.uploadPhoto(formData).subscribe((data: { toString: () => any; })=>{
  //     this.photoFileName = data.toString()
  //     this.photoFilePath = this.service.photoURL+this.photoFileName
  //   })
  // }
}
