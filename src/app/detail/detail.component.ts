import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SheredService } from '../shered.service';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss',
})
export class DetailComponent {
  voiture: any;
  index: number = 0;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public _shered: SheredService
  ) {}

  ngOnInit(): void {
    // Récupérer l'index de la voiture depuis l'URL
    this.index = +this.route.snapshot.paramMap.get('index')!;
    this.voiture = this._shered.voitures[this.index];
  }

  backToList(): void {
    this.router.navigate(['acc']); // Rediriger vers la liste
  }
  isIndexValid(): boolean {
    return this.index >= 0 && this.index < this.v.length;
  }

  v: any[] = [
    'assets/videos/1.mp4',
    'assets/videos/2.mp4',
    'assets/videos/3.mp4',
    'assets/videos/4.mp4',
    'assets/videos/5.mp4',
    'assets/videos/6.mp4',
  ];
}
