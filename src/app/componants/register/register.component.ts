import { Component } from '@angular/core';
import { AuthenticationService } from '../../services/Authentication/authentication.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router'; // Import Router

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthenticationService, private router: Router){}

  onRegister() {
    const user = {
      firstname: this.firstName,
      lastname: this.lastName,
      email: this.email,
      password: this.password
    };

    this.authService.register(user).subscribe(
      response => {
        console.log('Registration successful', response);
        this.router.navigate(['/login']); 
      },
      error => {
        console.error('Registration error', error);
        this.errorMessage = 'Registration failed. Please try again.'; // Set error message for UI
      }
    );
  }

}
