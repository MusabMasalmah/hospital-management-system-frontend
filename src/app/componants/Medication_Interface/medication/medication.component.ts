import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AddMedicationComponent } from '../add-medication/add-medication.component';
import { MedicationCardComponent } from '../medication-card/medication-card.component';
import { MedicationRepresintation } from '../../../models/medication-reprisintation';
import { MedicationService } from '../../../services/Medication/medication.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-medication',
  standalone: true,
  imports: [CommonModule, AddMedicationComponent, MedicationCardComponent, FormsModule],
  templateUrl: './medication.component.html',
  styleUrl: './medication.component.css'
})
export class MedicationComponent {
  medications: MedicationRepresintation[] = [];
  filteredMedications: MedicationRepresintation[] = [];
  searchTerm: string = '';

  constructor(private service: MedicationService) {}

  ngOnInit(): void {
    this.service.getAllMedications().subscribe({
      next: (result) => {
        this.medications = result;
        this.filteredMedications = result; // Initialize filteredMedications
      }
    });
  }

  filterMedications(): void {
    const searchTermLower = this.searchTerm.toLowerCase();
    this.filteredMedications = this.medications.filter(medication =>
      (medication.name?.toLowerCase() || '').includes(searchTermLower)
    );
  }

  onDeleteMedication(id: number) {
    this.service.deleteMedication(id).subscribe({
      next: () => {
        this.medications = this.medications.filter(medication => medication.id !== id); // Update the list after deletion
      },
      error: (error) => {
        console.error('Error deleting specialization:', error);
      }
    });
  } 

  onUpdateMedication(updatedMed: MedicationRepresintation) {
    if (updatedMed.id !== undefined) {
      this.service.updateMedication(updatedMed.id, updatedMed).subscribe({
        next: (result) => {
          console.log('Update successful:', result);
        },
        error: (error) => {
          console.error('Error updating specialization:', error);
        }
      });
    } else {
      console.error('Specialization ID is undefined');
    }
  }
}
 