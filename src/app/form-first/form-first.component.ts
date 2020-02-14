import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-first',
  templateUrl: './form-first.component.html',
  styleUrls: ['./form-first.component.css']
})
export class FormFirstComponent implements OnInit {

  status = 'Form no submitted';
  defaultName = '';
  constructor() { }

  ngOnInit(): void {
  }

  onSendForm(){
    console.log();
    // alert('Form send!');
    this.status = 'Form sent!';
  }

  onDefaultForm(){
    this.defaultName = 'Roxket';
  }

}
