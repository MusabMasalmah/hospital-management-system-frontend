import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MedicationRepresintation } from '../../models/medication-reprisintation';

@Injectable({
  providedIn: 'root'
})
export class MedicationService {
  private baseUrl: string = 'http://localhost:8080/Med';
  constructor(private http: HttpClient) { }

  getAllMedications() {
    return this.http.get<MedicationRepresintation[]>(this.baseUrl);
  }

  addMedication(medication: MedicationRepresintation){
    const Url = `${this.baseUrl}`;
    return this.http.post<MedicationRepresintation>(Url, medication);
  }

  deleteMedication(id: number) {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<void>(url);
  }

  updateMedication(id: number, medication: MedicationRepresintation) {
    const url = `${this.baseUrl}/${id}`;
    return this.http.put<MedicationRepresintation>(url, medication);
  }

}
 