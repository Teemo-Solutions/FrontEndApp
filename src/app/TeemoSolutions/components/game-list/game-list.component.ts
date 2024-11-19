import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GameService } from '../../services/game.service';
import { GameCardComponent } from '../game-card/game-card.component';

@Component({
  standalone: true,
  selector: 'app-game-list',
  template: `
    <div class="game-list-container">
      <div class="filters">
        <input
          [(ngModel)]="searchTerm"
          (ngModelChange)="filterGames()"
          placeholder="Search games..."
          class="search-input"
        >

        <select [(ngModel)]="sortOption" (ngModelChange)="sortGames()" class="sort-select">
          <option value="title">Sort by Title</option>
          <option value="rating">Sort by Rating</option>
          <option value="releaseDate">Sort by Release Date</option>
        </select>
      </div>

      <div class="games-grid">
        <app-game-card
          *ngFor="let game of filteredGames"
          [game]="game"
        ></app-game-card>
      </div>
    </div>
  `,
  styleUrls: ['./game-list.component.css'],
  imports: [CommonModule, FormsModule, GameCardComponent]
})
export class GameListComponent implements OnInit {
  games: any[] = [];
  filteredGames: any[] = [];
  searchTerm: string = '';
  sortOption: string = 'title';

  constructor(private gameService: GameService) {}

  ngOnInit() {
    this.gameService.getGames().subscribe((data: any[]) => {
      this.games = data;
      this.filteredGames = [...this.games];
      this.sortGames();
    });
  }

  filterGames() {
    this.filteredGames = this.games.filter(game =>
      game.title.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
    this.sortGames();
  }

  sortGames() {
    switch (this.sortOption) {
      case 'title':
        this.filteredGames.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'rating':
        this.filteredGames.sort((a, b) => b.rating - a.rating);
        break;
      case 'releaseDate':
        this.filteredGames.sort((a, b) => new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime());
        break;
    }
  }
}
