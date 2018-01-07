import { Component, Output, EventEmitter, HostListener, Input } from '@angular/core';

@Component({
    selector: 'site-nav',
    templateUrl: './siteNav.html',
    styleUrls: ['./siteNav.scss']
})
export class SiteNav {
  @Output() burgerClick = new EventEmitter();
  @Input() showBurger: boolean;

  onClick() {
    this.burgerClick.emit();
  }
}
