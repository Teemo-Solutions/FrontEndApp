import {AfterContentInit, Component, OnInit} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {UsersApiService} from "../../services/users-api.service";
import {User} from "../../models/user.entity";
import { Router } from '@angular/router';
import {FormsModule} from "@angular/forms";
import {MatOption, MatSelectModule} from "@angular/material/select";
import {Gamer} from "../../models/gamer.entity";
import {Developer} from "../../models/developer.entitiy";
import {GamersApiService} from "../../services/gamers-api.service";
import {DevelopersApiService} from "../../services/developers-api.service";

interface Rol {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-users-sign-in',
  standalone: true,
  imports: [
    MatButton,
    MatFormField,
    MatInputModule,
    MatLabel,
    FormsModule,
    MatSelectModule,
    MatOption
  ],
  templateUrl: './users-sing-in.component.html',
  styleUrl: './users-sing-in.component.css'

})



export class UsersSignInComponent {

  userData: User={
    id:0,
    username:"",
    email:"",
    password:"",
    role:""
  };
  selectedRole!: string;
  newId:number=0
  constructor(private router: Router,
              private usersService: UsersApiService,
              private gamersService: GamersApiService,
              private developersService: DevelopersApiService) {
    this.userData = {} as User;
  }

  rols: Rol[] = [
    {value: 'gamer', viewValue: 'Jugador'},
    {value: 'developer', viewValue: 'Desarrollador'}
  ];

  redirectToLogin() {
    this.router.navigate(['/login']);
  }

  registerUser() {
    this.newId=0
    this.usersService.getAll().subscribe((response:User[]) => {
      console.log(response.length +1);
      console.log(this.newId)
      const newUser = new User(this.newId, this.userData.username, this.userData.email, this.userData.password, this.selectedRole, this.userData.role);
      this.createUser(newUser);
    })
  }

  private createUser(user: User) {
    this.usersService.post(user).subscribe((response: any) => {
      console.log(response);
      if (this.selectedRole === 'gamer') {
        const newGamer = new Gamer(this.newId, response.id);
        this.gamersService.post(newGamer).subscribe((response: any) => {
          console.log('New gamer:', response);
        });
      } else if (this.selectedRole === 'developer') {
        const newDeveloper = new Developer(this.newId, response.id);
        this.developersService.post(newDeveloper).subscribe((response: any) => {
          console.log('New developer:', response);
        });
      }
      this.redirectToLogin();
    });
  }
}
