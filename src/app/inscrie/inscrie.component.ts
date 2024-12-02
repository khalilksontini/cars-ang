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
import axios from 'axios';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inscrie',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './inscrie.component.html',
  styleUrl: './inscrie.component.scss',
})
export class InscrieComponent {
  constructor(private router: Router) {}
  hide = signal(true);
  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }

  registerForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    state: new FormControl('', [Validators.required]),
    postalCode: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  async onSubmit(): Promise<void> {
    console.log(this.registerForm.value);

    if (this.registerForm.valid) {
      try {
        const response = await axios.post(
          'http://localhost:3001/api/register',
          this.registerForm.value
        );
        this.router.navigate(['connecter']);
        alert('Registration successful: ' + JSON.stringify(response.data));
      } catch (error: any) {
        alert(
          'Registration failed: ' +
            (error.response?.data?.error || 'Unexpected error occurred')
        );
      }
    } else {
      alert('Please fill out the form correctly.');
    }
  }
}
