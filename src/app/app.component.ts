import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ToolbarContentComponent} from "./public/components/toolbar-content/toolbar-content.component";
import {FooterContentComponent} from "./public/components/footer-content/footer-content.component";
import {GameListComponent} from "./TeemoSolutions/components/game-list/game-list.component";
import {GameCardComponent} from "./TeemoSolutions/components/game-card/game-card.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ToolbarContentComponent, FooterContentComponent, GameListComponent, GameCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FrontEndApp';
}
