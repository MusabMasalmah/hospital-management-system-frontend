import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SpecializationRepresintation } from '../../../models/specialization-represintation';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'app-specalization-card',
  standalone: true,
  imports: [FormsModule, CommonModule, NgIf],
  templateUrl: './specalization-card.component.html',
  styleUrl: './specalization-card.component.css'
})
export class SpecalizationCardComponent {
  @Input()
  spec: SpecializationRepresintation = {};
  @Output() 
  delete = new EventEmitter<number>();
  @Output() 
  update = new EventEmitter<SpecializationRepresintation>();

  @Input() 
  isEditing: boolean = false;

  onEdit() {
    this.isEditing = true;
  }

  onSave() {
    this.isEditing = false;
    this.update.emit(this.spec); // Emit the updated spec
  }

  onDelete() {
    this.delete.emit(this.spec.id); // Emit the ID to the parent component
    window.location.reload();
  }
} 
