import { Component } from '@angular/core';
import { AuthenticationService } from '../../services/Authentication/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  constructor(private authService: AuthenticationService, private router: Router) {}

  logout() {
    this.authService.setLoggedIn('false'); // Update your authentication state
    localStorage.removeItem('authToken'); // Remove the token from localStorage
    localStorage.setItem('isLoggedIn', 'false'); // Update login state in localStorage

    // Navigate to login page and refresh the page
    this.router.navigate(['/login']).then(() => {
      window.location.reload(); // Force a page reload
    });
  }
}
