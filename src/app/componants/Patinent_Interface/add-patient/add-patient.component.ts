import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { PatientReprisintation } from '../../../models/patient-reprisintation';
import { PatientService } from '../../../services/Patient/patient.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-add-patient',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './add-patient.component.html',
  styleUrl: './add-patient.component.css'
})
export class AddPatientComponent {
  patient: PatientReprisintation = {};

  constructor(private service: PatientService, private router: Router){}

  addPatient() {
    this.service.addPatient(this.patient).subscribe({
      next: (result) => {
        console.log('Patient added successfully:', result);
        window.location.reload(); // Refreshes the page
      },
      error: (error) => {
        console.error('Error adding Patient:', error);
      }
    });
  }
}
