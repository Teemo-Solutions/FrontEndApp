import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ToolbarContentComponent} from "./public/components/toolbar-content/toolbar-content.component";
import {FooterContentComponent} from "./public/components/footer-content/footer-content.component";
import {GameListComponent} from "./public/components/game-list/game-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ToolbarContentComponent, FooterContentComponent, GameListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FrontEndApp';
}
