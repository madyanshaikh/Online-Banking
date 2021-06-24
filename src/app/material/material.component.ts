import { NgModule } from '@angular/core';
import {MatSnackBarModule} from '@angular/material/snack-bar';


var materialcomponents = [
  MatSnackBarModule
]


@NgModule({

  imports: [materialcomponents],
  exports:[materialcomponents]
})
export class MaterialModule { }
