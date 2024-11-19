import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './public/pages/home/home.component';
import { AboutComponent } from './public/pages/about/about.component';
import { ContactComponent } from "./public/pages/contact/contact.component";
import { SubscriptionsComponent } from "./public/pages/subscriptions/subscriptions.component";
import { ProfileComponent } from "./public/pages/profile/profile.component";
import { GameDetailsComponent } from './TeemoSolutions/components/game-details/game-details.component';
import { UsersLoginComponent } from "./TeemoSolutions/components/user-login/user-login.component";
import {UsersSignInComponent} from "./TeemoSolutions/components/users-sing-in/users-sing-in.component";

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: UsersLoginComponent},
  { path: 'sign-in', component: UsersSignInComponent},
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'subscriptions', component: SubscriptionsComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'game/:id', component: GameDetailsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];
