import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
})
export class TimerComponent implements OnInit {
  @Input() endSeconds: number;
  @Output() finished = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {
    //console.log(this.endSeconds)
    this.startTimer();
  }

  //timer realted variables
  timer: any = null;
  startTime: Date;
  endTime: Date;
  ellapsedTime = '00:00';
  duration = '';

  startTimer() {
    this.startTime = new Date();
    this.ellapsedTime = '00:00';
    this.timer = setInterval(() => {
      this.tick();
    }, 1000);
    this.duration = this.parseTime(this.endSeconds);
  }

  parseTime(totalSeconds: number) {
    let mins: string | number = Math.floor(totalSeconds / 60);
    let secs: string | number = Math.round(totalSeconds % 60);
    mins = (mins < 10 ? '0' : '') + mins;
    secs = (secs < 10 ? '0' : '') + secs;
    return `${mins}:${secs}`;
  }

  tick() {
    const now = new Date();
    const diff = (now.getTime() - this.startTime.getTime()) / 1000;
    if (diff >= this.endSeconds) {
      this.finished.emit(true);
    } else {
      this.finished.emit(false);
    }
    this.ellapsedTime = this.parseTime(diff);
  }
}
