import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './pages/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { AboutComponent } from './pages/about/about.component';
import { BestSellerComponent } from './pages/best-seller/best-seller.component';
import { CroissantComponent } from './pages/croissant/croissant.component';
import { CroffleComponent } from './pages/croffle/croffle.component';
import { DrinksComponent } from './pages/drinks/drinks.component';
import { BrownieComponent } from './pages/brownie/brownie.component';
import { CakeComponent } from './pages/cake/cake.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'menu', component: MenuComponent},
  { path: 'about', component: AboutComponent },
  { path: 'best-seller', component: BestSellerComponent },
  { path: 'croissant', component: CroissantComponent},
  { path: 'croffle', component: CroffleComponent},
  { path: 'drinks', component: DrinksComponent},
  { path: 'cake', component: CakeComponent},
  { path: 'brownie', component: BrownieComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
