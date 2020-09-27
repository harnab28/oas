import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { StartTestComponent } from './start-test/start-test.component';

@NgModule({
  declarations: [StartTestComponent],
  imports: [CommonModule, RouterModule],
  exports: [],
})
export class StartTestModule {}
