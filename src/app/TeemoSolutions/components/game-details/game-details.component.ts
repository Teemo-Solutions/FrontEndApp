import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-game-details',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div *ngIf="game" class="game-details">
      <div class="header">
        <img [src]="game.image" [alt]="game.title" class="header-image">
        <h1 class="game-title">{{ game.title }}</h1>
      </div>

      <div class="content">
        <div class="main-content">
          <section>
            <h2>About the Game</h2>
            <p>{{ game.description }}</p>
          </section>

          <section>
            <h2>Screenshots</h2>
            <div class="screenshots">
              <img *ngFor="let screenshot of game.screenshots" [src]="screenshot" alt="Screenshot" class="screenshot">
            </div>
          </section>

          <section class="action-buttons">
            <button (click)="downloadGame()" class="action-button download-button">Download Game</button>
            <button (click)="viewComments()" class="action-button comments-button">View Comments</button>
          </section>
        </div>

        <aside class="game-info">
          <h2>Game Details</h2>
          <ul>
            <li><strong>Developer:</strong> {{ game.developer }}</li>
            <li><strong>Publisher:</strong> {{ game.publisher }}</li>
            <li><strong>Release Date:</strong> {{ game.releaseDate | date:'mediumDate' }}</li>
            <li><strong>Genre:</strong> {{ game.genre.join(', ') }}</li>
            <li><strong>Platforms:</strong> {{ game.platforms.join(', ') }}</li>
            <li>
              <strong>Rating:</strong>
              <div class="rating">
                <div class="stars">
                  <span *ngFor="let star of [1,2,3,4,5]"
                        [class.filled]="star <= game.rating">★</span>
                </div>
                <span class="rating-value">{{ game.rating.toFixed(1) }} / 5</span>
              </div>
            </li>
            <li><strong>Downloads:</strong> {{ game.downloads | number }}</li>
          </ul>
        </aside>
      </div>
    </div>
  `,
  styles: [`
    .game-details {
      font-family: Arial, sans-serif;
      color: #ffffff;
      max-width: 1200px;
      margin: 0 auto;
      padding: 20px;
      background-color: #300D30;
      min-height: 100vh;
    }

    .header {
      position: relative;
      margin-bottom: 20px;
    }

    .header-image {
      width: 100%;
      height: 300px;
      object-fit: cover;
      border-radius: 8px;
    }

    .game-title {
      position: absolute;
      bottom: 20px;
      left: 20px;
      color: white;
      font-size: 2.5em;
      text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
    }

    .content {
      display: flex;
      gap: 20px;
    }

    .main-content {
      flex: 2;
    }

    .game-info {
      flex: 1;
      background-color: rgba(255, 255, 255, 0.1);
      padding: 20px;
      border-radius: 8px;
    }

    h2 {
      color: #ffffff;
      margin-bottom: 15px;
    }

    p {
      line-height: 1.6;
    }

    .screenshots {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 10px;
      margin-top: 15px;
    }

    .screenshot {
      width: 100%;
      height: 150px;
      object-fit: cover;
      border-radius: 4px;
      transition: transform 0.3s ease;
    }

    .screenshot:hover {
      transform: scale(1.05);
    }

    ul {
      list-style-type: none;
      padding: 0;
    }

    li {
      margin-bottom: 10px;
    }

    .rating {
      display: flex;
      align-items: center;
    }

    .stars {
      color: #666;
      font-size: 1.2em;
      margin-right: 5px;
    }

    .stars .filled {
      color: #ffd700;
    }

    .rating-value {
      font-weight: bold;
    }

    .action-buttons {
      display: flex;
      gap: 10px;
      margin-top: 20px;
    }

    .action-button {
      padding: 10px 20px;
      font-size: 16px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }

    .download-button {
      background-color: #4CAF50;
      color: white;
    }

    .download-button:hover {
      background-color: #45a049;
    }

    .comments-button {
      background-color: #008CBA;
      color: white;
    }

    .comments-button:hover {
      background-color: #007B9A;
    }

    @media (max-width: 768px) {
      .content {
        flex-direction: column;
      }

      .game-info {
        order: -1;
      }
    }
  `]
})
export class GameDetailsComponent implements OnInit {
  game: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private gameService: GameService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.gameService.getGameById(Number(id)).subscribe(
        game => {
          this.game = game;
          console.log('Game details loaded:', this.game);
        },
        error => console.error('Error fetching game details:', error)
      );
    }
  }

  downloadGame() {
    this.router.navigate(['/download', this.game.title]);
  }

  viewComments() {
    this.router.navigate(['/comments', this.game.id]);
  }
}
