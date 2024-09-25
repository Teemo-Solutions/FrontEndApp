import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-profile-details',
  standalone: true,
  imports: [],
  templateUrl: './profile-details.component.html',
  styleUrl: './profile-details.component.css'
})
export class ProfileDetailsComponent {
  @Input() name: string = '';
  @Input() email: string = '';
  @Input() phone: string = '';
}
