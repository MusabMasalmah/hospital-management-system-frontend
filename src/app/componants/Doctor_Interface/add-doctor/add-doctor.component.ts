import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { DoctorReprisintation } from '../../../models/doctor-reprisintation';
import { DoctorService } from '../../../services/Doctor/doctor.service';
import { Module } from 'module';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-add-doctor',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './add-doctor.component.html',
  styleUrl: './add-doctor.component.css'
})
export class AddDoctorComponent {
  doctor: DoctorReprisintation = {};

  constructor(private service: DoctorService, private router: Router){}

  addDoctor() {
    this.service.addDoctor(this.doctor).subscribe({
      next: (result) => {
        console.log('Specialization added successfully:', result);
        window.location.reload(); // Refreshes the page
      },
      error: (error) => {
        console.error('Error adding specialization:', error);
      }
    });
  }
}
 