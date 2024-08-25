import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { AuthenticationService } from '../../services/Authentication/authentication.service';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { isPlatformBrowser, NgIf } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterModule, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthenticationService, private router: Router, @Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
   
    console.log(this.authService.isLoggedIn);
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('isLoggedIn', 'false');
    }
  }

  onLogin() {
    const user = {
      email: this.email,
      password: this.password
    };
  
    this.authService.authenticate(user).subscribe(
      response => {
        console.log('Login successful', response);
        localStorage.setItem('authToken', response.token); // Store the auth token
        localStorage.setItem('needsRefresh', 'true'); // Set the refresh flag
        this.authService.setLoggedIn('true'); // Set logged-in state
        this.router.navigate(['/specialization']); // Navigate to a secure route
        
      },
      error => {
        console.error('Login error', error);
        this.authService.setLoggedIn('false'); // Ensure logged-in state is false on error
        localStorage.removeItem('authToken'); // Remove any invalid token from localStorage
        this.errorMessage = 'Invalid email or password. Please try again.'; // Set error message for UI
      }
    );
  }
  
}
