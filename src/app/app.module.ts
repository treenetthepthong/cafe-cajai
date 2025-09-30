import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { AboutComponent } from './pages/about/about.component';
import { BestSellerComponent } from './pages/best-seller/best-seller.component';
import { CroissantComponent } from './pages/croissant/croissant.component';
import { CroffleComponent } from './pages/croffle/croffle.component';
import { DrinksComponent } from './pages/drinks/drinks.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    MenuComponent,
    AboutComponent,
    BestSellerComponent,
    CroissantComponent,
    CroffleComponent,
    DrinksComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
