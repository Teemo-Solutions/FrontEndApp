import { Component } from '@angular/core';
import {GameListComponent} from "../../../TeemoSolutions/components/game-list/game-list.component";
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    GameListComponent,
    TranslateModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
