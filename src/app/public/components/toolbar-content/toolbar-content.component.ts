import { Component } from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {MatToolbar} from "@angular/material/toolbar";
import {NgOptimizedImage} from "@angular/common";
import {MatTab, MatTabGroup} from "@angular/material/tabs";
import {FooterContentComponent} from "../footer-content/footer-content.component";

@Component({
  selector: 'app-toolbar-content',
  standalone: true,
  imports: [
    MatIcon,
    MatToolbar,
    NgOptimizedImage,
    MatTabGroup,
    MatTab,
    FooterContentComponent
  ],
  templateUrl: './toolbar-content.component.html',
  styleUrl: './toolbar-content.component.css'
})
export class ToolbarContentComponent {

}
