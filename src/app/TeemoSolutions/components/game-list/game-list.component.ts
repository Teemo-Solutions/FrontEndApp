import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameService } from '../../services/game.service';
import { GameCardComponent } from '../game-card/game-card.component';

@Component({
  standalone: true,
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css'],
  imports: [CommonModule, GameCardComponent]
})
export class GameListComponent implements OnInit {
  games: any[] = [];

  constructor(private gameService: GameService) {}

  ngOnInit() {
    this.gameService.getGames().subscribe((data: any[]) => {
      this.games = data.map((game: any) => ({
        title: game.title,
        image: game.image
      }));
    });
  }
}
