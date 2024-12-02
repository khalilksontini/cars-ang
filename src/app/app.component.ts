import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VidioComponent } from './vidio/vidio.component';
import { HeaderComponent } from './header/header.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, VidioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'bazikkk';
}
