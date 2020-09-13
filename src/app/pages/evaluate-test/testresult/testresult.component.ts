import { Component, OnInit } from '@angular/core';
import { TestserviceService } from '../../../services/testservice.service'

@Component({
  selector: 'app-testresult',
  templateUrl: './testresult.component.html',
  styleUrls: ['./testresult.component.scss']
})
export class TestresultComponent implements OnInit {

  constructor(private ts : TestserviceService) { }

  ngOnInit(): void {
  }

  get result(){
    console.log(this.ts.getResponse());
    return this.ts.getResponse();
  }
}
