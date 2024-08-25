import { Component } from '@angular/core';
import { PatientCardComponent } from '../patient-card/patient-card.component';
import { AddPatientComponent } from '../add-patient/add-patient.component';
import { CommonModule } from '@angular/common';
import { PatientReprisintation } from '../../../models/patient-reprisintation';
import { PatientService } from '../../../services/Patient/patient.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-patient',
  standalone: true,
  imports: [CommonModule, PatientCardComponent, AddPatientComponent, FormsModule],
  templateUrl: './patient.component.html',
  styleUrl: './patient.component.css'
})
export class PatientComponent {
  patients: PatientReprisintation[] = [];
  filteredPatients: PatientReprisintation[] = [];
  searchTerm: string = '';

  constructor(private service: PatientService) {}

  ngOnInit(): void {
    this.service.getAllPatients().subscribe({
      next: (result) => {
        this.patients = result;
        this.filteredPatients = result; // Initialize filteredPatients
      }
    });
  }

  filterPatients(): void {
    const searchTermLower = this.searchTerm.toLowerCase();
    this.filteredPatients = this.patients.filter(patient =>
      (patient.name?.toLowerCase() || '').includes(searchTermLower)
    );
  }

  onDeletePatient(id: number) {
    this.service.deletePatient(id).subscribe({
      next: () => {
        this.patients = this.patients.filter(patient => patient.id !== id); // Update the list after deletion
      },
      error: (error) => {
        console.error('Error deleting specialization:', error);
      }
    });
  }

  onUpdatePatient(updatedPatient: PatientReprisintation) {
    if (updatedPatient.id !== undefined) {
      this.service.updatePatient(updatedPatient.id, updatedPatient).subscribe({
        next: (result) => {
          console.log('Update successful:', result);
          // Update the local patient array with the updated details
          this.patients = this.patients.map(patient =>
            patient.id === updatedPatient.id ? updatedPatient : patient
          );
        },
        error: (error) => {
          console.error('Error updating patient:', error);
        }
      });
    } else {
      console.error('Patient ID is undefined');
    }
  }

  onAssignMedication(event: { medId: number, patientId: number }){
    this.service.assignMedToPatient(event.medId, event.patientId).subscribe({
      next: (success) => {
        if (success) {
          console.log('Medication assigned successfully');
        } else {
          console.log('Failed to assign medication');
        }
      },
      error: (error) => {
        console.error('Error assigning medication:', error);
      }
    });
  }

  
}
  