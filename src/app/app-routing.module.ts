import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ExamQuestionComponent } from './pages/create-exam/exam-question/exam-question.component';
import { TestresultComponent } from './pages/evaluate-test/test-result/test-result.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent, // this is the component with the <router-outlet> in the template
    children: [
      {
        path: '', // child route path
        component: ExamQuestionComponent, // child route component that the router renders
      },
      {
        path: 'endtest',
        component: TestresultComponent, // another child route component that the router renders
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
