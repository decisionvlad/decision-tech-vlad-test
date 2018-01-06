import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'site-nav',
    templateUrl: './siteNav.html',
    styleUrls: ['./siteNav.scss']
})
export class SiteNav {
  @Output() burgerClick = new EventEmitter();

  onClick() {
    this.burgerClick.emit();
  }
}
