import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestresultComponent } from './testresult/testresult.component';



@NgModule({
  declarations: [TestresultComponent],
  imports: [
    CommonModule
  ],
  exports: [
    TestresultComponent
  ]
})
export class EvaluateTestModule { }
