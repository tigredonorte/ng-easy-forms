import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cep-field-demo',
  templateUrl: './cep-field-demo.component.html',
  styleUrls: ['./cep-field-demo.component.scss']
})
export class CepFieldDemoComponent implements OnInit {

  model = '';
  translations = {};
  constructor() { }

  ngOnInit() {
  }

}
