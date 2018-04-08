import { SaveButtonTitles } from './sabe-button.model';
import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-save-button',
  templateUrl: './save-button.component.html',
  styleUrls: ['./save-button.component.scss']
})
export class SaveButtonComponent implements OnChanges {
  @Input() status = '';
  @Input() enabled = true;
  @Output() clicked = new EventEmitter();

  _title = SaveButtonTitles.default;
  isDisabled = false;
  isSaving = false;

  constructor() {}

  ngOnChanges(simpleChanges: SimpleChanges) {
    if (simpleChanges['status']) {
      if (this.status !== '' && !SaveButtonTitles[this.status]) {
        console.warn('invalid status', this.status);
      }
      this._title = SaveButtonTitles[this.status] || SaveButtonTitles.default;
      this.isSaving = this.status === 'saving';
    }

    this.isDisabled = ['error', 'saving'].indexOf(this.status) !== -1 || !this.enabled;
  }

  public onClick() {
    try {
      this.clicked.emit(true);
    } catch (e) {
      console.warn(e);
    }
  }
}
