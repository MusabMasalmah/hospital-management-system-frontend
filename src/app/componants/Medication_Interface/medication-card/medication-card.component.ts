import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MedicationRepresintation } from '../../../models/medication-reprisintation';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'app-medication-card',
  standalone: true,
  imports: [FormsModule, CommonModule, NgIf],
  templateUrl: './medication-card.component.html',
  styleUrl: './medication-card.component.css'
})
export class MedicationCardComponent {
  @Input()
  medication: MedicationRepresintation = {};
  @Output() 
  delete = new EventEmitter<number>();
  @Output() 
  update = new EventEmitter<MedicationRepresintation>();

  @Input() 
  isEditing: boolean = false;

  onEdit() {
    this.isEditing = true;
  }

  onSave() {
    this.isEditing = false;
    this.update.emit(this.medication); // Emit the updated spec
  }

  onDelete() {
    this.delete.emit(this.medication.id); // Emit the ID to the parent component
    window.location.reload();
  }
}
