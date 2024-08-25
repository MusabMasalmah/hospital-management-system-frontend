import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AddAppointmentComponent } from '../add-appointment/add-appointment.component';
import { AppointmentCardComponent } from '../appointment-card/appointment-card.component';
import { AppointmentRepresintation } from '../../../models/appointment-reprisintation';
import { AppointmentService } from '../../../services/Appointment/appointment.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-appointment',
  standalone: true,
  imports: [CommonModule, AddAppointmentComponent, AppointmentCardComponent, FormsModule],
  templateUrl: './appointment.component.html',
  styleUrl: './appointment.component.css'
})
export class AppointmentComponent {
  appointments: AppointmentRepresintation[] = [];
  filteredAppointments: AppointmentRepresintation[] = [];
  searchTerm: string = '';

  constructor(private service: AppointmentService) {}

  ngOnInit(): void {
    this.service.getAllAppointments().subscribe({
      next: (result) => {
        this.appointments = result;
        this.filteredAppointments = result; // Initialize filteredAppointments
      }
    });
  }

  filterAppointments(): void {
    const searchTermLower = this.searchTerm.toLowerCase();
    this.filteredAppointments = this.appointments.filter(appointment =>
      (appointment.reason?.toLowerCase() || '').includes(searchTermLower)
    );
  }

  onDeleteAppointment(id: number) {
    this.service.deleteAppointments(id).subscribe({
      next: () => {
        this.appointments = this.appointments.filter(appointment => appointment.id !== id); // Update the list after deletion
        window.location.reload();
      },
      error: (error) => {
        console.error('Error deleting specialization:', error);
      }
    });
  }

  onUpdateAppointment(updatedAppointment: AppointmentRepresintation) {
    if (updatedAppointment.id !== undefined && updatedAppointment.patientID !== undefined && updatedAppointment.doctorID !== undefined && updatedAppointment.appointmentDate !== undefined && updatedAppointment.reason !== undefined) {
      this.service.updateAppointment(
        updatedAppointment.id,
        updatedAppointment.patientID,
        updatedAppointment.doctorID,
        updatedAppointment.appointmentDate,
        updatedAppointment.reason
      ).subscribe({
        next: (result) => {
          console.log('Update successful:', result);
          // Optionally update the local appointments list
          this.appointments = this.appointments.map(appointment => 
            appointment.id === updatedAppointment.id ? updatedAppointment : appointment
          );
          window.location.reload();
        },
        error: (error) => {
          console.error('Error updating appointment:', error);
        }
      });
    } else {
      console.error('Appointment ID is undefined');
    }
  }
} 
