import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SiteNav } from 'app/components/siteNav/siteNav';
import { BurgerMenu } from 'app/components/burgerMenu/burgerMenu';
import { HeaderComponent } from 'app/components/header/header.component';
import { FiltersComponent } from 'app/components/filters/filters.component';
import { GridComponent } from './components/grid/grid.component';


@NgModule({
  declarations: [
    AppComponent,
    SiteNav,
    BurgerMenu,
    HeaderComponent,
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
