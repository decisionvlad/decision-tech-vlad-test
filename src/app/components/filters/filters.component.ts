import { Component, OnInit, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';

export class FilterState {
  constructor(
    public broadbandChecked: boolean,
    public tvChecked: boolean,
    public mobileChecked: boolean,
    speed: number,
    mobileData: number
  ) {}
}

@Component({
  selector: 'filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent {
  @Output() change = new EventEmitter<FilterState>();

  private state = new FilterState(false, false, false, 0, 0);

  onChange() {
    this.change.emit(this.state);
  }
}
