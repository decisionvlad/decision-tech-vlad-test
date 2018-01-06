import { fakeAsync, TestBed, ComponentFixture, async, tick } from '@angular/core/testing';
import { SiteNav } from './siteNav';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { BurgerMenu } from '../burgerMenu/burgerMenu';

describe('Component BurgerMenu', () => {
  let fixture: ComponentFixture<SiteNav>;
  let component: SiteNav;
  let burgerElt: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        SiteNav,
        BurgerMenu
      ]
    });
    fixture = TestBed.createComponent(SiteNav);
    component = fixture.componentInstance;
    burgerElt = fixture.debugElement.query(By.css('#burger-menu'));
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
  
  it('click is transmitted', fakeAsync(() => {
    spyOn(component.burgerClick, 'emit');
    burgerElt.nativeElement.click();
    tick();
    expect(component.burgerClick.emit).toHaveBeenCalled();
  }));

});
