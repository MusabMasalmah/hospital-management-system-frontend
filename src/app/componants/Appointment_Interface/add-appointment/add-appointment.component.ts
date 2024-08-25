import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppointmentRepresintation } from '../../../models/appointment-reprisintation';
import { AppointmentService } from '../../../services/Appointment/appointment.service';
import { Router } from '@angular/router';
import { DoctorReprisintation } from '../../../models/doctor-reprisintation';
import { PatientReprisintation } from '../../../models/patient-reprisintation';
import { DoctorService } from '../../../services/Doctor/doctor.service';
import { PatientService } from '../../../services/Patient/patient.service';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-add-appointment',
  standalone: true,
  imports: [FormsModule, NgForOf],
  templateUrl: './add-appointment.component.html',
  styleUrl: './add-appointment.component.css'
})
export class AddAppointmentComponent {
  doctors: DoctorReprisintation[] = [];
  patients: PatientReprisintation[] = [];
  appointment: AppointmentRepresintation = {};


  constructor(
    private service: AppointmentService, 
    private router: Router,
    private doctorService: DoctorService, 
    private patientService: PatientService
  ){}

  ngOnInit(): void {
    this.doctorService.getAllDoctors().subscribe(doctors => {
      this.doctors = doctors;
    });

    this.patientService.getAllPatients().subscribe(patients => {
      this.patients = patients;
    });
  }

  addAppointment() {
    const { patientID, doctorID, appointmentDate, reason } = this.appointment;
  
    if (patientID && doctorID && appointmentDate && reason) {
      this.service.scheduleAppointment(patientID, doctorID, appointmentDate, reason).subscribe({
        next: (result) => {
          console.log('Appointment scheduled successfully:', result);
          window.location.reload(); // Refreshes the page
        },
        error: (error) => {
          console.error('Error scheduling appointment:', error);
        }
      });
    } else {
      console.error('All fields are required to schedule an appointment.');
      // Optionally, display an error message to the user
    }
  }
   
  
}
 