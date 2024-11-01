import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./game-card.component.css']
})
export class GameCardComponent {
  @Input() game!: any;

  constructor(private router: Router) {}

  navigateToGameDetails() {
    this.router.navigate(['/game', this.game.id]);
  }
}
