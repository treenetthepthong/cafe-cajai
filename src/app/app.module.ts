import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
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
import { CartComponent } from './pages/cart/cart.component';
import { HttpClientModule } from '@angular/common/http';
import { BrownieComponent } from './pages/brownie/brownie.component';
import { CakeComponent } from './pages/cake/cake.component';
import { CommonModule } from '@angular/common';


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
    CartComponent,
    BrownieComponent,
    CakeComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
