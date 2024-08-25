import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { AppointmentRepresintation } from '../../models/appointment-reprisintation';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  private baseUrl: string = 'http://localhost:8080/Appointment';
  constructor(private http: HttpClient) {}

  getAllAppointments() {
    return this.http.get<AppointmentRepresintation[]>(this.baseUrl);
  }

  deleteAppointments(id: number) {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<void>(url);
  }

  scheduleAppointment(patientId: number, doctorId: number, date: string, reason: string){
    const url = `${this.baseUrl}/schedule`;
    const params = new HttpParams()
      .set('patientId', patientId.toString())
      .set('doctorId', doctorId.toString())
      .set('date', date)
      .set('reason', reason);

    return this.http.post<boolean>(url, {}, { params });
  }

  updateAppointment(appointmentId: number,patientId: number, doctorId: number, date: string, reason: string) {
    const url = `${this.baseUrl}/${appointmentId}`;
    const params = new HttpParams()
      .set('patientId', patientId.toString())
      .set('doctorId', doctorId.toString())
      .set('date', date)
      .set('reason', reason);


    return this.http.put<boolean>(url, {}, { params });
  }

}
 