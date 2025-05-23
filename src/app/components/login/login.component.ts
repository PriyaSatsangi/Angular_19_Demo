import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(private router: Router) {}

  login() {
    const users = JSON.parse(localStorage.getItem('users') || '[]');

    const matchedUser = users.find(
      (u: any) => u.email === this.email && u.password === this.password
    );

    if (matchedUser) {
      alert('Login successful!');
      localStorage.setItem('isLoggedIn', 'true');
      // this.router.navigate(['/dashboard']);
      // You could store a login session here
      this.router.navigate(['/dashboard']);
    } else {
      alert('Invalid email or password.');
    }
  }

  goToSignup() {
    this.router.navigate(['/signup']);
  }
}
