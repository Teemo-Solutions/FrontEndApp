
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

/** @title Simple form field */
@Component({
  selector: 'name-input',
  templateUrl: 'name-input.component.html',
  styleUrl: 'name-input.component.css',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NameInputComponent {}
