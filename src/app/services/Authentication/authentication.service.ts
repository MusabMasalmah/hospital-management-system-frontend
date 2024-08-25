import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private apiUrl = 'http://localhost:8080/api/v1/auth';

  constructor(private http: HttpClient, @Inject(PLATFORM_ID) private platformId: object) {
  }

  register(data: any) {
    return this.http.post<any>(`${this.apiUrl}/register`, data);
  }

  authenticate(data: any) {
    return this.http.post<any>(`${this.apiUrl}/authenticate`, data);
  }

  setLoggedIn(value: string){
    console.log("set to login");
    localStorage.setItem('isLoggedIn', value);
  }

  isLoggedIn(): boolean {
    const loginState = localStorage.getItem('isLoggedIn');
    console.log("check if login "+ loginState);
    return loginState === 'true'; // This will return true or false
  }

  logout(): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem('authToken');
      this.setLoggedIn('false');
    }
  }
}
