import { Component, HostListener } from '@angular/core';
import {MatToolbar} from "@angular/material/toolbar";
import {MatFormField} from "@angular/material/form-field";
import {MatIcon} from "@angular/material/icon";
import {TranslateModule} from "@ngx-translate/core";
import {MatInputModule} from "@angular/material/input";

@Component({
  selector: 'app-footer-content',
  standalone: true,
  imports: [
    MatToolbar,
    MatFormField,
    MatInputModule,
    MatIcon,
    TranslateModule
  ],
  templateUrl: './footer-content.component.html',
  styleUrl: './footer-content.component.css'
})
export class FooterContentComponent {
  isButtonVisible = false;

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    // Mostrar el botón solo cuando el usuario haya hecho scroll hacia abajo
    const scrollPosition =  document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.isButtonVisible = scrollPosition > 300; // Mostrar después de 300px
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
