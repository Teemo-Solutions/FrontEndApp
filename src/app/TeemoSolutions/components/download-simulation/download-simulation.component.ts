import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-download-simulation',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="download-simulation">
      <h1>Descargando Juego...</h1>
      <p>Simulando la descarga del juego con ID: {{ gameId }}</p>
      <div class="loading-bar">
        <div class="progress"></div>
      </div>
    </div>
  `,
  styles: [`
    .download-simulation {
      font-family: Arial, sans-serif;
      color: #ffffff;
      max-width: 600px;
      margin: 100px auto;
      padding: 20px;
      background-color: #300D30;
      border-radius: 8px;
      text-align: center;
    }

    h1 {
      font-size: 24px;
      margin-bottom: 20px;
    }

    p {
      margin-bottom: 20px;
    }

    .loading-bar {
      width: 100%;
      height: 20px;
      background-color: #ddd;
      border-radius: 10px;
      overflow: hidden;
    }

    .progress {
      width: 0%;
      height: 100%;
      background-color: #4CAF50;
      animation: progress 5s linear infinite;
    }

    @keyframes progress {
      0% { width: 0%; }
      100% { width: 100%; }
    }
  `]
})
export class DownloadSimulationComponent implements OnInit {
  gameId: string | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.gameId = this.route.snapshot.paramMap.get('id');
  }
}