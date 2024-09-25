import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {ToolbarContentComponent} from "./public/components/toolbar-content/toolbar-content.component";
import {FooterContentComponent} from "./public/components/footer-content/footer-content.component";
import {MatCard, MatCardContent} from "@angular/material/card";
import {MatAnchor} from "@angular/material/button";
import {MatToolbar} from "@angular/material/toolbar";
import {GameListComponent} from "./TeemoSolutions/components/game-list/game-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ToolbarContentComponent, FooterContentComponent, MatCardContent, MatCard, MatAnchor, RouterLink, MatToolbar, GameListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FrontEndApp';

  options = [
    { path: '/home', title: 'Home'},
    { path: '/about', title: 'About'},
    { path: '/contact', title: 'Contact'},
    { path: '/subscriptions', title: 'Subscriptions'},
  ]
}
