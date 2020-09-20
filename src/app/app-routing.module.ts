import { Routes } from '@angular/router';

import { TestQuestionComponent } from './pages/attempt-test/test-question/test-question.component';
import { TestResultComponent } from './pages/evaluate-test/test-result/test-result.component';
import { StartTestComponent } from './pages/start-test/start-test/start-test.component';

const routesList: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'start-test' },
  { path: 'attempt-test', pathMatch: 'full', component: TestQuestionComponent },
  { path: 'start-test', pathMatch: 'full', component: StartTestComponent },
  { path: 'end-test', pathMatch: 'full', component: TestResultComponent },
];

export { routesList };
