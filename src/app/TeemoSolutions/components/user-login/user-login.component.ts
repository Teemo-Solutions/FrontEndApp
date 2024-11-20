import { Component, OnInit } from '@angular/core';
import { MatFormField } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButton } from "@angular/material/button";
import { Router } from "@angular/router";
import { User } from "../../models/user.entity";
import { UsersApiService } from "../../services/users-api.service";
import { FormsModule } from "@angular/forms";
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from '../error-dialog/error-dialog.component';

@Component({
  selector: 'app-users-login',
  standalone: true,
  imports: [
    MatFormField,
    MatInputModule,
    MatButton,
    FormsModule
  ],
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
})
export class UsersLoginComponent implements OnInit {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private router: Router, private usersApiService: UsersApiService, private dialog: MatDialog) {}

  ngOnInit() {}

  loginUser() {
    this.usersApiService.getAll().subscribe((users: User[]) => {
      const user = users.find(user => user.username === this.username);
      if (user) {
        if (user.password === this.password) {
          this.router.navigate(['/profile'], { state: { username: user.username, email: user.email } });
        } else {
          this.openErrorDialog();
        }
      } else {
        this.openErrorDialog();
      }
    });
  }

  openErrorDialog() {
    this.dialog.open(ErrorDialogComponent);
  }

  redirectToPasswordRecovery() {
    this.router.navigate(['/password-recovery']);
  }

  redirectToSignin() {
    this.router.navigate(['sign-in']);
  }
}
