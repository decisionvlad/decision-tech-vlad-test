import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SiteNav } from './components/siteNav/siteNav';
import { BurgerMenu } from './components/burgerMenu/burgerMenu';
import { FiltersComponent } from './components/filters/filters.component';
import { GridComponent } from './components/grid/grid.component';


@NgModule({
  declarations: [
    AppComponent,
    SiteNav,
    BurgerMenu,
    FiltersComponent,
    GridComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
