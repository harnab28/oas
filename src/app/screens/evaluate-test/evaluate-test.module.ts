import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestResultComponent } from './test-result/test-result.component';

@NgModule({
  declarations: [TestResultComponent],
  imports: [CommonModule],
  exports: [TestResultComponent],
})
export class EvaluateTestModule {}
