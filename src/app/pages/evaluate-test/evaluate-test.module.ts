import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestresultComponent } from './test-result/test-result.component';

@NgModule({
  declarations: [TestresultComponent],
  imports: [CommonModule],
  exports: [TestresultComponent],
})
export class EvaluateTestModule {}
