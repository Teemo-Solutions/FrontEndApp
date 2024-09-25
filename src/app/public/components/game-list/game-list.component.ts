import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameCardComponent } from '../game-card/game-card.component';

@Component({
  standalone: true,
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css'],
  imports: [CommonModule, GameCardComponent]
})
export class GameListComponent {
  games = [
    { id: 1, title: 'The Last of Us part II', description: 'Description 1', image: 'assets/games/game1.png' },
    { id: 2, title: 'Space Cat', description: 'Description 2', image: 'assets/games/game2.png' },
    { id: 3, title: 'Hive', description: 'Description 2', image: 'assets/games/game3.png' },
    { id: 4, title: 'Neon Tail', description: 'Description 2', image: 'assets/games/game4.png' },
    { id: 5, title: 'Genshin Impact', description: 'Description 2', image: 'assets/games/game5.png' },
    { id: 6, title: 'EA FC 25', description: 'Description 2', image: 'assets/games/game6.png' },
    { id: 7, title: 'League of Legends', description: 'Description 2', image: 'assets/games/game7.png' },
    { id: 8, title: 'Minecraft', description: 'Description 2', image: 'assets/games/game8.png' },
    { id: 9, title: 'Shapik', description: 'Description 2', image: 'assets/games/game9.png' },
    { id: 10, title: 'World off Warships', description: 'Description 2', image: 'assets/games/game10.png' },
    { id: 11, title: 'Railgunners', description: 'Description 2', image: 'assets/games/game11.png' },
    { id: 12, title: 'Faerie Afterlight', description: 'Description 2', image: 'assets/games/game12.png' },
    { id: 13, title: 'HeartBound', description: 'Description 2', image: 'assets/games/game13.png' },
    { id: 14, title: 'SpiderHeck', description: 'Description 2', image: 'assets/games/game14.png' },
    { id: 15, title: 'Super Skelemania', description: 'Description 2', image: 'assets/games/game15.png' },
    { id: 16, title: 'Light Fall', description: 'Description 2', image: 'assets/games/game16.png' },
    { id: 17, title: 'SpiritWell', description: 'Description 2', image: 'assets/games/game17.png' },
    { id: 18, title: 'Mayhem in single valley', description: 'Description 2', image: 'assets/games/game18.png' },
    { id: 19, title: 'Vault', description: 'Description 2', image: 'assets/games/game19.png' },
    { id: 20, title: 'Manacircle', description: 'Description 2', image: 'assets/games/game20.png' },
    { id: 21, title: 'Dragon ball Sparking Zero', description: 'Description 2', image: 'assets/games/game21.png' },
    { id: 22, title: 'My red Panda', description: 'Description 2', image: 'assets/games/game22.png' },
    { id: 23, title: 'Eternal Hope', description: 'Description 2', image: 'assets/games/game23.png' },
    { id: 24, title: 'Golden Light', description: 'Description 2', image: 'assets/games/game24.png' },
    { id: 25, title: 'Toasty: Ashes of Dusk', description: 'Description 2', image: 'assets/games/game25.png' },
    { id: 26, title: 'Catju Adventures', description: 'Description 2', image: 'assets/games/game26.png' },
    { id: 27, title: 'WARBORN', description: 'Description 2', image: 'assets/games/game27.png' },
    { id: 28, title: 'Scarlet Hollow', description: 'Description 2', image: 'assets/games/game28.png' },
    { id: 29, title: 'The Captain', description: 'Description 2', image: 'assets/games/game29.png' },
    { id: 30, title: 'Pixel Heist', description: 'Description 2', image: 'assets/games/game30.png' },
    { id: 31, title: 'Paper Tanks', description: 'Description 2', image: 'assets/games/game31.png' },
    { id: 32, title: 'Rabbit story', description: 'Description 2', image: 'assets/games/game32.png' },
    { id: 33, title: 'Underhero', description: 'Description 2', image: 'assets/games/game33.png' },
    { id: 34, title: 'Raji: An Ancient Epic', description: 'Description 2', image: 'assets/games/game34.png' },
    { id: 35, title: 'Pile Up', description: 'Description 2', image: 'assets/games/game35.png' },
    { id: 36, title: 'Only if', description: 'Description 2', image: 'assets/games/game36.png' },
  ];


  constructor() {
    console.log(this.games);
  }
}
