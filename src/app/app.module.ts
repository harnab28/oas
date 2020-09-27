import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { routesList } from './app-routing.module';

import { AttemptTestModule } from './screens/attempt-test/attempt-test.module';
import { EvaluateTestModule } from './screens/evaluate-test/evaluate-test.module';
import { StartTestModule } from './screens/start-test/start-test.module';

const routes: Routes = routesList;

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    // AppRoutingModule,
    FormsModule,
    AttemptTestModule,
    EvaluateTestModule,
    StartTestModule,
    RouterModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
