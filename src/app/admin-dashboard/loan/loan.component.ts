
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';


/**
 * @title Stepper with customized states
 */
@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.css'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: { displayDefaultIndicatorType: false }
  }]
})
export class LoanComponent implements OnInit {
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  photoFilePath: any
  photoFileName: any

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
      first1Ctrl: ['', Validators.required],
      first2Ctrl: ['', Validators.required],
      first3Ctrl: ['', Validators.required],
      first4Ctrl: ['', Validators.required],
      first5Ctrl: ['', Validators.required],
      first6Ctrl: ['', Validators.required],
      first7Ctrl: ['', Validators.required],
      first8Ctrl: ['', Validators.required],
      first9Ctrl: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
      second1Ctrl: ['', Validators.required],
      second2Ctrl: ['', Validators.required],
      second3Ctrl: ['', Validators.required],
      second4Ctrl: ['', Validators.required],
      second5Ctrl: ['', Validators.required]
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
