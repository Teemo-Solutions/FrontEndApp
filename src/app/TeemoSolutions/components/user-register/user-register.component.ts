import { Component } from '@angular/core';
import {MatFormField} from "@angular/material/form-field";
import {EmailInputComponent} from "../../../public/components/email-input/email-input.component";
import {MatButton} from "@angular/material/button";
import {
  MatCard,
  MatCardContent,
  MatCardHeader, MatCardSmImage,
  MatCardSubtitle,
  MatCardTitle,
  MatCardTitleGroup
} from "@angular/material/card";
import {PasswordInputComponent} from "../../../public/components/password-input/password-input.component";
import {MatInput} from "@angular/material/input";
import {NameInputComponent} from "../../../public/components/name-input/name-input.component";

@Component({
  selector: 'app-user-register',
  standalone: true,
  imports: [
    MatFormField,
    EmailInputComponent,
    MatButton,
    MatCard,
    MatCardContent,
    MatCardHeader,
    MatCardSubtitle,
    MatCardTitle,
    MatCardTitleGroup,
    PasswordInputComponent,
    MatCardSmImage,
    MatInput,
    NameInputComponent
  ],
  templateUrl: './user-register.component.html',
  styleUrl: './user-register.component.css'
})
export class UserRegisterComponent {

}
