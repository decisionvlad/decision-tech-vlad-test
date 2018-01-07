import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { FiltersComponent, FilterState } from './filters.component';
import { FormsModule } from '@angular/forms';
import { DebugElement } from '@angular/core/src/debug/debug_node';
import { By } from '@angular/platform-browser';

describe('FiltersComponent', () => {
  let fixture: ComponentFixture<FiltersComponent>;
  let component: FiltersComponent;
  let broadbandCheckElt: HTMLInputElement;
  let tvCheckElt: HTMLInputElement;
  let mobileCheckElt: HTMLInputElement;
  let speedSelectElt: HTMLSelectElement;
  let dataSelectElt: HTMLSelectElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltersComponent ],
      imports: [ FormsModule ]
    }).compileComponents();
    fixture = TestBed.createComponent(FiltersComponent);
    component = fixture.debugElement.componentInstance;
    broadbandCheckElt = fixture.debugElement.query(By.css('#broadbandCheck')).nativeElement;
    tvCheckElt = fixture.debugElement.query(By.css('#tvCheck')).nativeElement;
    mobileCheckElt = fixture.debugElement.query(By.css('#mobileCheck')).nativeElement;
    speedSelectElt = fixture.debugElement.query(By.css('#speedSelect')).nativeElement;
    dataSelectElt = fixture.debugElement.query(By.css('#dataSelect')).nativeElement;
    fixture.detectChanges();
  }));

  it('should be created', async(() => {
    expect(component).toBeTruthy();
  }));

  it('nothing triggers no event', () => {
    spyOn(component.change, 'emit');
    expect(component.change.emit).toHaveBeenCalledTimes(0);
  });

  it('broadbandCheck triggers an event', () => {
    spyOn(component.change, 'emit');
    broadbandCheckElt.click();
    expect(component.change.emit).toHaveBeenCalledWith(new FilterState(false, true, true, 0, 0));
  });

  it('tvCheck triggers an event', () => {
    spyOn(component.change, 'emit');
    tvCheckElt.click();
    expect(component.change.emit).toHaveBeenCalledWith(new FilterState(true, false, true, 0, 0));
  });

  it('mobileCheck triggers an event', () => {
    spyOn(component.change, 'emit');
    mobileCheckElt.click();
    expect(component.change.emit).toHaveBeenCalledWith(new FilterState(true, true, false, 0, 0));
  });
});
