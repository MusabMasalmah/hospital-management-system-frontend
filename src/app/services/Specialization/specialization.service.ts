import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SpecializationRepresintation } from '../../models/specialization-represintation';

@Injectable({
  providedIn: 'root'
})
export class SpecializationService { 

  private baseUrl: string = 'http://localhost:8080/Spec'; 

  constructor(private http: HttpClient) { }

  // Method to create the headers with the authorization token
  private createHeaders() {
    const authToken = localStorage.getItem('authToken');
    console.log('Authorization Token:', authToken); // Debug log
    return new HttpHeaders({
      'Authorization': `Bearer ${authToken}`
    });
  }

  getAllSpecializations() {
    const headers = this.createHeaders();
    return this.http.get<SpecializationRepresintation[]>(this.baseUrl, { headers });
  }

  addSpecialization(spec: SpecializationRepresintation) {
    const headers = this.createHeaders();
    return this.http.post<SpecializationRepresintation>(this.baseUrl, spec, { headers });
  }

  deleteSpecialization(id: number) {
    const url = `${this.baseUrl}/${id}`;
    const headers = this.createHeaders();
    return this.http.delete<void>(url, { headers });
  }

  updateSpecialization(specializationId: number, spec: SpecializationRepresintation) {
    const url = `${this.baseUrl}/${specializationId}`;
    const headers = this.createHeaders();
    return this.http.put<boolean>(url, spec, { headers });
  }
}
