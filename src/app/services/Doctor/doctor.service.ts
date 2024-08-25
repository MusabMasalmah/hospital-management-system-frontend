import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { DoctorReprisintation } from '../../models/doctor-reprisintation';
import { PageRepresentation } from '../../models/page-reprisintation';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  private baseUrl: string = 'http://localhost:8080/Doctor';

  constructor(private http: HttpClient) { }

  getDoctorsByPage(page: number = 0, size: number = 5){
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());

    return this.http.get<PageRepresentation>(`${this.baseUrl}/page`, { params });
  }

  getAllDoctors() {
    return this.http.get<DoctorReprisintation[]>(this.baseUrl);
  }

  addDoctor(doctor: DoctorReprisintation){
    const Url = `${this.baseUrl}`;
    return this.http.post<DoctorReprisintation>(Url, doctor);
  }

  deleteDoctor(id: number) {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<void>(url);
  }

  updateSpecialization(doctorId: number, doctor: DoctorReprisintation) {
    const url = `${this.baseUrl}/${doctorId}`;
    
    return this.http.put<boolean>(url, doctor);
  }

  assignSpecializationToDoctor(doctorId: number, specId: number) {
    const url = `${this.baseUrl}/${doctorId}/to/${specId}`;
    return this.http.post<boolean>(url, null); // Use null if no request body is needed
  }

}
 