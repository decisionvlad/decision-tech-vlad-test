import { async, ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';

import { GridComponent } from './grid.component';
import { BroadbandResult } from '../../types/broadbanddeals';

describe('GridComponent', () => {
  let component: GridComponent;
  let fixture: ComponentFixture<GridComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ GridComponent ]
    });
    fixture = TestBed.createComponent(GridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('no deals before loading', fakeAsync(() => {
    expect(component.allDeals.length).toEqual(0);
    expect(component.filteredDeals.length).toEqual(0);
  }));
});
