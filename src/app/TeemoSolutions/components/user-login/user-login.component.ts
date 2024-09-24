import { Component } from '@angular/core';
import { EmailInputComponent } from "../../../public/components/email-input/email-input.component";
import { PasswordInputComponent } from "../../../public/components/password-input/password-input.component";

import {
  MatCard,
  MatCardContent,
  MatCardHeader,
  MatCardSubtitle,
  MatCardTitle,
  MatCardTitleGroup
} from "@angular/material/card";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-user-login',
  standalone: true,
  imports: [
    MatCard,
    MatCardTitle,
    MatCardContent,
    MatLabel,
    MatFormField,
    MatInput,
    MatCardSubtitle,
    MatCardTitleGroup,
    MatCardHeader,
    EmailInputComponent,
    PasswordInputComponent,
    MatButton
  ],
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.css'
})
export class UserLoginComponent {

}
