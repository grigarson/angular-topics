import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {
  @Output() emiterFromChild2: EventEmitter<any> = new EventEmitter<any>();
  public buttonName = 'child2';
  public buttonColor = 'primary';

  constructor() { }

  ngOnInit(): void {
  }

  doSomethingWhenCatchTheClick(event: any): void {
    console.log(event);
    this.emiterFromChild2.emit(event);
  }
}
