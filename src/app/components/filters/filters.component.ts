import { Component, Output, EventEmitter, Input } from "@angular/core";


export class FilterState {
  speed: string;
  data: string;
  constructor(
    public broadbandChecked: boolean,
    public tvChecked: boolean,
    public mobileChecked: boolean,
    speedNumber: number,
    dataNumber: number
  ) {
    this.speed = '' + speedNumber;
    this.data = '' + dataNumber;
  }
}

@Component({
  selector: 'filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent {
  @Output() change = new EventEmitter<FilterState>();
  @Input() isMobile: boolean;

  private state = new FilterState(true, true, true, 0, 0);

  onChange() {
    this.change.emit(this.state);
  }
}
