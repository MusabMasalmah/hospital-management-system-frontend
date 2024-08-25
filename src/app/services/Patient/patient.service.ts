import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PatientReprisintation } from '../../models/patient-reprisintation';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private baseUrl: string = 'http://localhost:8080/Patient';
  constructor(private http: HttpClient) { }

  getAllPatients() {
    return this.http.get<PatientReprisintation[]>(this.baseUrl);
  }

  addPatient(patient: PatientReprisintation){
    const Url = `${this.baseUrl}`;
    return this.http.post<PatientReprisintation>(Url, patient);
  }

  deletePatient(id: number) {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<void>(url);
  }

  updatePatient(patientId: number, updatedPatient: PatientReprisintation) {
    const url = `${this.baseUrl}/${patientId}`;
    return this.http.put<boolean>(url, updatedPatient);
  }

  assignMedToPatient(medId: number, patId: number) {
    const url = `${this.baseUrl}/med/${medId}/to/${patId}`;
    return this.http.post<boolean>(url, {});
  }
}
 