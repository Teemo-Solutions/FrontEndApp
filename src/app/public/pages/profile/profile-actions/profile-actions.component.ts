import { Component } from '@angular/core';
import {MatButton} from "@angular/material/button";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-profile-actions',
  standalone: true,
  imports: [
    MatButton,
    RouterLink
  ],
  templateUrl: './profile-actions.component.html',
  styleUrl: './profile-actions.component.css'
})
export class ProfileActionsComponent {

}
