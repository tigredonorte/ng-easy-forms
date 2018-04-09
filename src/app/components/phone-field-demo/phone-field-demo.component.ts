import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-phone-field-demo',
  templateUrl: './phone-field-demo.component.html',
  styleUrls: ['./phone-field-demo.component.scss']
})
export class PhoneFieldDemoComponent implements OnInit {

  model = '';
  model2 = '';
  translations = {};
  constructor() { }

  ngOnInit() {
  }

}
