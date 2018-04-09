import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cpf-field-demo',
  templateUrl: './cpf-field-demo.component.html',
  styleUrls: ['./cpf-field-demo.component.scss']
})
export class CpfFieldDemoComponent implements OnInit {

  model = '';
  translations = {};
  constructor() { }

  ngOnInit() {
  }

}
