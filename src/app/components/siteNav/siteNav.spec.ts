/*
import { fakeAsync, TestBed, ComponentFixture } from '@angular/core/testing';
import { SiteNav } from 'app/components/siteNav/siteNav';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('Component BurgerMenu', fakeAsync(() => {
  let fixture: ComponentFixture<SiteNav>;
  let component: SiteNav;
  let burgerElt: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SiteNav]
    }).compileComponents();
    fixture = TestBed.createComponent(SiteNav);
    component = fixture.componentInstance;
    burgerElt = fixture.debugElement.query(By.css('#burger-menu'));
  });

  it('click is transmitted', () => {
    burgerElt.nativeElement.click();
    expect(component.burgerClick.emit).toHaveBeenCalled();
  });

}));
*/