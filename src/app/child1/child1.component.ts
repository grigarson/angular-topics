import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {
  @Output() emiterFromChild1: EventEmitter<any> = new EventEmitter<any>();
  public nameOfButton = 'child1';
  public buttonColorDefinedFromChild1 = 'warn';

  constructor() { }

  ngOnInit(): void {
  }

  doSomethingWhenCatchTheClick(event: any): void {
    console.log(event);
    this.emiterFromChild1.emit(event);
  }
}
