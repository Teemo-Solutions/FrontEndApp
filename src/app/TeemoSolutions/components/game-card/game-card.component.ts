import { Component, Input, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  standalone: true,
  styleUrls: ['./game-card.component.css']
})

export class GameCardComponent {
  @Input() game!: { title: string; image: string };
}
