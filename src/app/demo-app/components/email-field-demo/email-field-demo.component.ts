import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-email-field-demo',
  templateUrl: './email-field-demo.component.html',
  styleUrls: ['./email-field-demo.component.scss']
})
export class EmailFieldDemoComponent implements OnInit {
  control = new FormControl('');
  model = '';
  reactiveValue = '';
  placeholder = 'email';
  example1 = '<app-email-field [placeholder]="placeholder" [(ngModel)]="model"></app-email-field>';
  example2 = '<app-email-field [placeholder]="placeholder" [formControl]="control"></app-email-field>';
  constructor() {}

  ngOnInit() {
  }
}
