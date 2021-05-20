import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  public leftCounter = 0;
  public rightCounter = 0;
  public child2ButtonClickedAt = '';
  public child1ButtonClickedAt = '';

  constructor() { }

  ngOnInit(): void {
  }

  somethingEmitedFromChild2(eventFromChild2: any): void {
    console.log('emition from child 2: ', eventFromChild2);
    this.leftCounter++;
    this.child2ButtonClickedAt = eventFromChild2;
  }

  somethingEmitedFromChild1(eventFromChild1: any): void {
    console.log('emition from child 1: ', eventFromChild1);
    this.rightCounter++;
    this.child1ButtonClickedAt = eventFromChild1;
  }
}
