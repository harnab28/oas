import { Component, OnInit } from '@angular/core';

import { TestService } from '../../../services/test-service.service';

@Component({
  selector: 'app-testresult',
  templateUrl: './test-result.component.html',
  styleUrls: ['./test-result.component.scss'],
})
export class TestResultComponent implements OnInit {
  constructor(private ts: TestService) {}

  ngOnInit(): void {}

  // get result(){
  //   // console.log(this.ts.getResponse());
  //   // return this.ts.getResponse();
  // }
}
