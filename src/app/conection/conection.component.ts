import { signal, Component } from '@angular/core';
import {
  FormControl,
  Validators,
  FormsModule,
  ReactiveFormsModule,
  FormGroup,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import axios from 'axios';
import { Router } from '@angular/router';

@Component({
  selector: 'app-conection',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './conection.component.html',
  styleUrl: './conection.component.scss',
})
export class ConectionComponent {
  hide = signal(true);
  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }

  private firebaseConfig = {
    apiKey: 'AIzaSyDwyKXRkZXhFau0Ms9_FDNliypnUZiMeUk',
    authDomain: 'bazikkk.firebaseapp.com',
    projectId: 'bazikkk',
    storageBucket: 'bazikkk.firebasestorage.app',
    messagingSenderId: '524194771340',
    appId: '1:524194771340:web:ba5ce4ff749e6647fca6a9',
  };

  private app = initializeApp(this.firebaseConfig);
  private auth = getAuth(this.app);

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  async onLogin(): Promise<void> {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;

      try {
        // Firebase authentication
        const userCredential = await signInWithEmailAndPassword(
          this.auth,
          email!,
          password!
        );
        const user = userCredential.user;

        // Get ID token
        const idToken = await user.getIdToken();

        // Send ID token to the backend
        const response = await axios.post('http://localhost:3001/api/login', {
          idToken,
        });

        alert(
          'Login successful! Server response: ' + JSON.stringify(response.data)
        );
        this.router.navigate(['acc']);
      } catch (error: any) {
        console.error('Login error:', error);
        alert(
          'Error logging in: ' + (error.message || 'Unexpected error occurred')
        );
      }
    } else {
      alert('Please fill out the form correctly.');
    }
  }
  constructor(private router: Router) {}
}
