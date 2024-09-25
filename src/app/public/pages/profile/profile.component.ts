import {Component, OnInit} from '@angular/core';
import {ProfileAvatarComponent} from "./profile-avatar/profile-avatar.component";
import {ProfileDetailsComponent} from "./profile-details/profile-details.component";
import {ProfileActionsComponent} from "./profile-actions/profile-actions.component";

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    ProfileAvatarComponent,
    ProfileDetailsComponent,
    ProfileActionsComponent
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit{

  exampleUser = {
    avatarUrl: 'assets/messi.jpeg',
    name: 'Messi',
    email: 'CopaDelMundo@Qatar.com',
    phone: '123-456-7890'
  }

  constructor() {
  }

  ngOnInit(): void {
  }
}
