import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './public/pages/home/home.component';
import { AboutComponent } from './public/pages/about/about.component';
import {ContactComponent} from "./public/pages/contact/contact.component";
import {SubscriptionsComponent} from "./public/pages/subscriptions/subscriptions.component";
import { ProfileComponent } from "./public/pages/profile/profile.component"


export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'subscriptions', component: SubscriptionsComponent },
  { path: 'profile', component: ProfileComponent },
  { path: ' ', redirectTo: '/home', pathMatch: 'full' } // Redirecciona a 'home' por defecto
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
