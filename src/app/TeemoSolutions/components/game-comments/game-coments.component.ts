import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-game-comments',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="comments-container">
      <h1>Comments for Game ID: {{ gameId }}</h1>

      <div class="comment-form">
        <textarea [(ngModel)]="newComment" placeholder="Write a comment..." rows="4"></textarea>
        <button (click)="addComment()">Add Comment</button>
      </div>

      <div class="comments-list">
        <div *ngFor="let comment of comments" class="comment">
          <div class="comment-header">
            <span class="username">{{ comment.username }}</span>
            <span class="date">{{ comment.date | date:'medium' }}</span>
          </div>
          <p class="comment-text">{{ comment.text }}</p>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .comments-container {
      font-family: Arial, sans-serif;
      max-width: 950px;
      margin: 0 auto;
      padding: 20px;
      background-color: #300D30;
      color: #ffffff;
    }

    h1 {
      font-size: 24px;
      margin-bottom: 20px;
    }

    .comment-form {
      margin-bottom: 20px;
    }

    textarea {
      width: 97%;
      padding: 10px;
      border: 1px solid #ddd;
      border-radius: 4px;
      resize: vertical;
      background-color: #ffffff;
      color: #000000;
    }

    button {
      margin-top: 10px;
      padding: 10px 20px;
      background-color: #4CAF50;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }

    button:hover {
      background-color: #45a049;
    }

    .comments-list {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    .comment {
      background-color: rgba(255, 255, 255, 0.1);
      padding: 15px;
      border-radius: 8px;
    }

    .comment-header {
      display: flex;
      justify-content: space-between;
      margin-bottom: 10px;
      font-size: 14px;
    }

    .username {
      font-weight: bold;
    }

    .date {
      color: #cccccc;
    }

    .comment-text {
      line-height: 1.6;
    }
  `]
})
export class GameCommentsComponent implements OnInit {
  gameId: string | null = null;
  comments: any[] = [];
  newComment: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.gameId = this.route.snapshot.paramMap.get('id');
    // Aquí normalmente cargarías los comentarios del juego desde un servicio
    this.loadMockComments();
  }

  loadMockComments() {
    this.comments = [
      { id: 1, username: 'Player1', date: new Date('2023-05-15'), text: 'Great game! I love the graphics.' },
      { id: 2, username: 'GamerGirl', date: new Date('2023-05-16'), text: 'The storyline is amazing, but the final boss is too difficult.' },
      { id: 3, username: 'CasualGamer', date: new Date('2023-05-17'), text: 'Fun to play, but it needs more levels.' }
    ];
  }

  addComment() {
    if (this.newComment.trim()) {
      const newCommentObj = {
        id: this.comments.length + 1,
        username: 'Tú', // Normalmente esto vendría del sistema de autenticación
        date: new Date(),
        text: this.newComment.trim()
      };
      this.comments.unshift(newCommentObj);
      this.newComment = '';
    }
  }
}
