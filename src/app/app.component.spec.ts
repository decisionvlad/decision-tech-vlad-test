import { TestBed, async } from '@angular/core/testing';
import {
  HttpModule,
  Http,
  Response,
  ResponseOptions,
  XHRBackend
} from '@angular/http';
import {MockBackend} from '@angular/http/testing';

import { AppComponent } from './app.component';
import { NO_ERRORS_SCHEMA } from "@angular/core/";
import { SiteNav } from 'app/components/siteNav/siteNav';
import { BurgerMenu } from 'app/components/burgerMenu/burgerMenu';
import { FiltersComponent } from 'app/components/filters/filters.component';
import { GridComponent } from 'app/components/grid/grid.component';
import { HeaderComponent } from 'app/components/header/header.component';



describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      declarations: [
        AppComponent,
        HeaderComponent,
        SiteNav,
        BurgerMenu,
        FiltersComponent,
        GridComponent
      ],
        schemas: [NO_ERRORS_SCHEMA],
      providers: [        
        { provide: XHRBackend, useClass: MockBackend },
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'start'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('start');
  }));

});
