import { NgModule } from '@angular/core';

import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  imports: [MatInputModule, MatFormFieldModule, MatSelectModule],
  exports: [MatInputModule, MatFormFieldModule, MatSelectModule],
})
export class AngularMaterialModule {}
