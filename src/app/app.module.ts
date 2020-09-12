import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { CreateExamModule } from './pages/create-exam/create-exam.module'
=======
import { TestComponent } from './components/test/test.component';
import { TimerComponent } from './components/timer/timer.component';
>>>>>>> 3fd1300687f448e73b64c4e64072495418c42d78

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    TimerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CreateExamModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
