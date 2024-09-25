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
    this.gameService.getGames().subscribe((data: { juegos: any[]; }) => {
      this.games = data.juegos.map((game: any) => ({
        title: game.nombre,
        description: game.género,  // Puedes personalizarlo con más información
        image: 'assets/games/game1.png'  // Cambia esto por una imagen real si la tienes
      }));
    });
  }
}
