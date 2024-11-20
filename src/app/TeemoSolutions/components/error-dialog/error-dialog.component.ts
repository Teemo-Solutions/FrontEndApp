import { Component } from '@angular/core';
import {MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle} from "@angular/material/dialog";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-error-dialog',
  template: `
    <h1 mat-dialog-title>Error</h1>
    <div mat-dialog-content>
      <p>Usuario o contraseña incorrectos.</p>
    </div>
    <div mat-dialog-actions>
      <button mat-button mat-dialog-close>Aceptar</button>
    </div>
  `,
  imports: [
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatButton,
    MatDialogClose
  ],
  standalone: true
})
export class ErrorDialogComponent {}
