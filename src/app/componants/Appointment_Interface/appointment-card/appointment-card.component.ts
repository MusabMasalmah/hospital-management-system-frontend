import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AppointmentRepresintation } from '../../../models/appointment-reprisintation';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'app-appointment-card',
  standalone: true,
  imports: [FormsModule, CommonModule, NgIf],
  templateUrl: './appointment-card.component.html',
  styleUrls: ['./appointment-card.component.css']
})
export class AppointmentCardComponent {
  @Input()
  appointment: AppointmentRepresintation = {};

  @Output() 
  delete = new EventEmitter<number>();

  @Output() 
  update = new EventEmitter<AppointmentRepresintation>();

  isEditing: boolean = false;

  onEdit() {
    this.isEditing = true;
  }

  onSave() {
    this.update.emit(this.appointment); // Emit the updated appointment to the parent component
    this.isEditing = false;
  }

  onDelete() {
    this.delete.emit(this.appointment.id); // Emit the ID to the parent component
    window.location.reload();
  }
}
