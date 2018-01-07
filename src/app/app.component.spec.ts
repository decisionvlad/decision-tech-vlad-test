import { TestBed, async, fakeAsync, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { SiteNav } from './components/siteNav/siteNav';
import { BurgerMenu } from './components/burgerMenu/burgerMenu';
import { FiltersComponent } from './components/filters/filters.component';
import { GridComponent } from './components/grid/grid.component';
import { FormsModule } from '@angular/forms';
import { DealsService } from './services/deals.service';
import { HttpClientModule } from '@angular/common/http';
import { MockDealsService } from './services/mock-deals.service';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
  let mockDealService: MockDealsService;
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        SiteNav,
        BurgerMenu,
        FiltersComponent,
        GridComponent
      ],
      providers: [
        [{ provide: DealsService, useClass: MockDealsService }]
      ],
      imports: [
        FormsModule,
        HttpClientModule
      ]
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  }));

  it('GIVEN viewport for desktop THEN burger menu hidden', async(() => {
    component.isSmallScreen = false;
    fixture.detectChanges();
    const burgerMenu = fixture.debugElement.query(By.css('#burger-menu'));
    expect(burgerMenu).toBeNull();
  }));

  it('GIVEN viewport for mobile THEN burger menu visible', async(() => {
    component.isSmallScreen = true;
    fixture.detectChanges();
    const burgerMenu = fixture.debugElement.query(By.css('#burger-menu'));
    expect(burgerMenu).toBeDefined();
  }));

  it('GIVEN viewport for smartphone THEN hide filter menu', async(() => {
    component.isSmallScreen = true;
    fixture.detectChanges();
    const burgerMenu = fixture.debugElement.query(By.css('#burger-menu')).nativeElement;
    const filterMenu = fixture.debugElement.query(By.css('#filters')).nativeElement;
    expect(filterMenu.hidden).toBeTruthy();
  }));

  it('GIVEN viewport for smartphone WHEN click burger menu THEN show filter menu', async(() => {
    component.isSmallScreen = true;
    fixture.detectChanges();
    const burgerMenu = fixture.debugElement.query(By.css('#burger-menu')).nativeElement;
    burgerMenu.click();
    fixture.detectChanges();
    const filterMenu = fixture.debugElement.query(By.css('#filters')).nativeElement;
    expect(filterMenu.hidden).toBeFalsy();
  }));

  it('GIVEN viewport for smartphone AND filter visible WHEN click burger menu THEN hide filter menu', async(() => {
    component.isSmallScreen = true;
    fixture.detectChanges();
    const burgerMenu = fixture.debugElement.query(By.css('#burger-menu')).nativeElement;
    burgerMenu.click();
    fixture.detectChanges();
    burgerMenu.click();
    fixture.detectChanges();
    const filterMenu = fixture.debugElement.query(By.css('#filters')).nativeElement;
    expect(filterMenu.hidden).toBeTruthy();
  }));
});
