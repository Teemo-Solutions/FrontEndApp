import {Component, Input} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-profile-avatar',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './profile-avatar.component.html',
  styleUrl: './profile-avatar.component.css'
})
export class ProfileAvatarComponent {
  @Input() avatarUrl: string = 'assets/messi.jpeg';
}
