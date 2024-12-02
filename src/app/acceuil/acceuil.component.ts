import { Component } from '@angular/core';
import { SheredService } from '../shered.service';
import { NgForOf } from '@angular/common';
import { NgClass } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-acceuil',
  standalone: true,
  imports: [NgForOf, NgClass, RouterModule, FormsModule],
  templateUrl: './acceuil.component.html',
  styleUrl: './acceuil.component.scss',
})
export class AcceuilComponent {
  buttonText!: string;
  ngOnInit() {
    this.buttonText = 'jaime';
  }
  onSnap(voiture: any) {
    if (voiture.buttonText === 'jaime') {
      voiture.like++;
      voiture.buttonText = 'Oops, un jaime!';
    } else {
      voiture.like--;
      voiture.buttonText = 'jaime';
    }
  }
  constructor(public _shered: SheredService) {}
  deleteCar(voiture: any): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer cette voiture ?')) {
      this._shered.voitures = this._shered.voitures.filter(
        (v) => v !== voiture
      );
    }
  }
}
