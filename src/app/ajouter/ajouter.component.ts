import { Component } from '@angular/core';
import { SheredService } from '../shered.service';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
@Component({
  selector: 'app-ajouter',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './ajouter.component.html',
  styleUrl: './ajouter.component.scss',
})
export class AjouterComponent {
  generateRandomNumber(): number {
    return Math.floor(Math.random() * 100) + 1;
  }

  voiture = {
    buttonText: 'jaime',
    Marque: '',
    Model: '',
    Image: '',
    Color: '',
    Prix: 0,
    date: new Date(),
    like: 0,
    commentaire: '',
  };

  ajout() {
    this.voiture.like = this.generateRandomNumber();
    this._shered.voitures.push(this.voiture);
    this.voiture = {
      buttonText: 'jaime',
      Marque: '',
      Model: '',
      Image: '',
      Color: '',
      Prix: 0,
      date: new Date(),
      like: 0,
      commentaire: '',
    };
    this.router.navigate(['acc']);
  }

  constructor(public _shered: SheredService, private router: Router) {}
}
