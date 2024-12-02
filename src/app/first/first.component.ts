import { Component } from '@angular/core';
import { AjouterComponent } from '../ajouter/ajouter.component';
import { AcceuilComponent } from '../acceuil/acceuil.component';
@Component({
  selector: 'app-first',
  standalone: true,
  imports: [AjouterComponent, AcceuilComponent],
  templateUrl: './first.component.html',
  styleUrl: './first.component.scss',
})
export class FirstComponent {}
