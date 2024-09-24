import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ToolbarContentComponent} from "./public/components/toolbar-content/toolbar-content.component";
import { UserLoginComponent} from "./TeemoSolutions/components/user-login/user-login.component";
import {UserRegisterComponent} from "./TeemoSolutions/components/user-register/user-register.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ToolbarContentComponent, UserLoginComponent, UserRegisterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FrontEndApp';
}
