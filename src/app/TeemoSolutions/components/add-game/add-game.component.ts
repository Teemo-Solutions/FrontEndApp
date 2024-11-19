import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GameService } from '../../services/game.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-game',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="add-game-container">
      <h2>Add New Game</h2>
      <form (ngSubmit)="onSubmit()" #gameForm="ngForm">
        <div class="form-group">
          <label for="title">Title:</label>
          <input type="text" id="title" name="title" [(ngModel)]="newGame.title" required>
        </div>
        <div class="form-group">
          <label for="description">Description:</label>
          <textarea id="description" name="description" [(ngModel)]="newGame.description" required></textarea>
        </div>
        <div class="form-group">
          <label for="image">Image URL:</label>
          <input type="text" id="image" name="image" [(ngModel)]="newGame.image" required>
        </div>
        <div class="form-group">
          <label for="rating">Rating:</label>
          <input type="number" id="rating" name="rating" [(ngModel)]="newGame.rating" min="0" max="5" step="0.1" required>
        </div>
        <div class="form-group">
          <label for="releaseDate">Release Date:</label>
          <input type="date" id="releaseDate" name="releaseDate" [(ngModel)]="newGame.releaseDate" required>
        </div>
        <button type="submit" [disabled]="!gameForm.form.valid">Add Game</button>
      </form>
    </div>
  `,
  styles: [`
    .add-game-container {
      max-width: 500px;
      margin: 0 auto;
      padding: 20px;
      background-color: #300D30;
      color: white;
      border-radius: 8px;
    }
    h2 {
      text-align: center;
      margin-bottom: 20px;
    }
    .form-group {
      margin-bottom: 15px;
    }
    label {
      display: block;
      margin-bottom: 5px;
    }
    input, textarea {
      width: 96%;
      padding: 8px;
      border: 1px solid #ddd;
      border-radius: 4px;
      background-color: #fff;
      color: #000;
    }
    button {
      width: 100%;
      padding: 10px;
      background-color: #4CAF50;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
    button:disabled {
      background-color: #cccccc;
      cursor: not-allowed;
    }
  `]
})
export class AddGameComponent {
  newGame: any = {
    title: '',
    description: '',
    image: '',
    rating: 0,
    releaseDate: ''
  };

  constructor(private gameService: GameService, private router: Router) {}

  onSubmit() {
    this.gameService.addGame(this.newGame).subscribe(
      response => {
        console.log('Game added successfully', response);
        this.router.navigate(['/games']);
      },
      error => {
        console.error('Error adding game', error);
      }
    );
  }
}
