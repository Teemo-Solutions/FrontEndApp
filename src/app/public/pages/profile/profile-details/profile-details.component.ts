import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { MatButton } from "@angular/material/button";
import { RouterLink, Router } from "@angular/router";
import { MatInput } from "@angular/material/input";

@Component({
  selector: 'app-profile-details',
  standalone: true,
  imports: [CommonModule, FormsModule, MatButton, RouterLink, MatInput],
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.css']
})
export class ProfileDetailsComponent implements OnInit {
  username: string = '';
  email: string = '';

  isEditing: boolean = false;

  constructor(private router: Router) {}

  ngOnInit() {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state) {
      this.username = navigation.extras.state['username'];
      this.email = navigation.extras.state['email'];
    }
  }

  editProfile() {
    this.isEditing = true;
  }

  saveProfile() {
    // Add logic to save changes, e.g., calling a service
    this.isEditing = false;
  }

  cancelEdit() {
    this.isEditing = false;
  }
}
