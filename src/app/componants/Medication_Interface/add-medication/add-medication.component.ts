import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MedicationRepresintation } from '../../../models/medication-reprisintation';
import { MedicationService } from '../../../services/Medication/medication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-medication',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-medication.component.html',
  styleUrl: './add-medication.component.css'
})
export class AddMedicationComponent {
  medication: MedicationRepresintation = {};

  constructor(private service: MedicationService, private router: Router){}

  addMedication() {
    this.service.addMedication(this.medication).subscribe({
      next: (result) => {
        console.log('Medication added successfully:', result);
        window.location.reload(); // Refreshes the page
      },
      error: (error) => {
        console.error('Error adding Medication:', error);
      }
    });
  }
}
 