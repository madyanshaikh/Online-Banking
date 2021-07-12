import { NgModule } from '@angular/core';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSidenavModule} from '@angular/material/sidenav';

var materialcomponents = [
  MatSnackBarModule,
  MatSidenavModule
]


@NgModule({

  imports: [materialcomponents],
  exports:[materialcomponents]
})
export class MaterialModule { }
