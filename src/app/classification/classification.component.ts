import { Component } from '@angular/core';
import { SheredService } from '../shered.service';
import { NgForOf } from '@angular/common';
import { NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-classification',
  standalone: true,
  imports: [NgForOf, NgClass, FormsModule, NgIf],
  templateUrl: './classification.component.html',
  styleUrl: './classification.component.scss',
})
export class ClassificationComponent {
  constructor(public _shered: SheredService) {}
  filterPrice!: number;
}
