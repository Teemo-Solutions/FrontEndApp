// src/app/public/components/toolbar-content/toolbar-content.component.ts
import { Component } from '@angular/core';
import { MatIcon } from "@angular/material/icon";
import { MatToolbar } from "@angular/material/toolbar";
import { NgOptimizedImage } from "@angular/common";
import { MatTab, MatTabGroup } from "@angular/material/tabs";
import { FooterContentComponent } from "../footer-content/footer-content.component";
import { Router, RouterLink } from "@angular/router";

@Component({
  selector: 'app-toolbar-content',
  standalone: true,
  imports: [
    MatIcon,
    MatToolbar,
    NgOptimizedImage,
    MatTabGroup,
    MatTab,
    FooterContentComponent,
    RouterLink
  ],
  templateUrl: './toolbar-content.component.html',
  styleUrl: './toolbar-content.component.css'
})
export class ToolbarContentComponent {
  constructor(private router: Router) {}

  onTabChange(event: any) {
    const tabIndex = event.index;
    switch (tabIndex) {
      case 0:
        this.router.navigate(['/home']);
        break;
      case 1:
        this.router.navigate(['/about']);
        break;
      case 2:
        this.router.navigate(['/contact']);
        break;
      case 3:
        this.router.navigate(['/subscriptions']);
        break;
      case 4:
        this.router.navigate(['/profile']);
        break;
      default:
        break;
    }
  }
}
