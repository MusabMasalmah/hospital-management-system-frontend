import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PatientReprisintation } from '../../../models/patient-reprisintation';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'app-patient-card',
  standalone: true,
  imports: [FormsModule, CommonModule, NgIf],
  templateUrl: './patient-card.component.html',
  styleUrl: './patient-card.component.css'
})
export class PatientCardComponent {
  @Input()
  patient: PatientReprisintation = {};
  @Output() 
  delete = new EventEmitter<number>();
  @Output() 
  update = new EventEmitter<PatientReprisintation>();
  @Output() 
  addMed = new EventEmitter<{ medId: number, patientId: number }>();



  medId: number = 0;
  isEditing: boolean = false;
  isAddingMed: boolean = false;

  onAddMed(){
    this.isAddingMed = true;
  }

  onSaveMed(){
    this.isAddingMed = false;
    this.addMed.emit({ medId: this.medId, patientId: this.patient.id! });
    window.location.reload();
  }

  onEdit() {
    this.isEditing = true;
  }

  onSave() {
    this.isEditing = false;
    this.update.emit(this.patient); // Emit the updated patient information
  }

  onDelete() {
    this.delete.emit(this.patient.id); // Emit the ID to the parent component
    window.location.reload();
  }
}
