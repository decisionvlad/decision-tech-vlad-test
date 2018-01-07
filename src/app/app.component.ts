import { Component, ElementRef, ViewChild, HostListener } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { BroadbandResult } from './types/broadbanddeals';
import { FilterState } from './components/filters/filters.component';
import { GridComponent } from './components/grid/grid.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('grid') grid: GridComponent;
  constructor() {
  }

  title = "start";

  private isMobileMenuOn = false;

  get showFilters(): boolean {
    return !this.isSmallScreen || this.isMobileMenuOn;
  }
  
  onBurgerClick() {
    this.isMobileMenuOn = !this.isMobileMenuOn;
  }

  onFilterChanged(filter) {
    if (!(filter instanceof FilterState))
      return;
    this.grid.setFilter(filter);
  }

  isSmallScreen = this.isWidthSmall(window.innerWidth);
  @HostListener('window:resize', ['$event'])
  resize(event) {
    const prevIsSmallScreen = this.isSmallScreen;
    this.isSmallScreen = this.isWidthSmall(window.innerWidth);
    if (!prevIsSmallScreen && this.isSmallScreen)
      this.isMobileMenuOn = false;
  }
  isWidthSmall(width: number): boolean {
    return width <= 960;
  }
}
