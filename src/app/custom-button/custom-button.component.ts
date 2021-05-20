import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-custom-button',
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.css']
})
export class CustomButtonComponent implements OnInit {
  @Input() buttonText = '';
  @Input() buttonColor = '';
  @Output() buttonClickEvent: EventEmitter<any> = new EventEmitter<any>();
  public date = '';

  constructor() { }

  ngOnInit(): void {
  }

  buttonClicked(): void {
    this.date = new Date().toString();
    console.log('button is clicked');
    this.buttonClickEvent.emit(this.date);
  }
}
