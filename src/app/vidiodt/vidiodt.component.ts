import { Component } from '@angular/core';

@Component({
  selector: 'app-vidiodt',
  standalone: true,
  imports: [],
  templateUrl: './vidiodt.component.html',
  styleUrl: './vidiodt.component.scss',
})
export class VidiodtComponent {
  v: any[] = [
    'assets/videos/1.mp4',
    'assets/videos/2.mp4',
    'assets/videos/3.mp4',
    'assets/videos/4.mp4',
    'assets/videos/5.mp4',
    'assets/videos/6.mp4',
  ];
}
