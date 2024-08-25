import { Component } from '@angular/core';
import { AddDoctorComponent } from '../add-doctor/add-doctor.component';
import { DoctorCardComponent } from '../doctor-card/doctor-card.component';
import { CommonModule } from '@angular/common';
import { DoctorReprisintation } from '../../../models/doctor-reprisintation';
import { DoctorService } from '../../../services/Doctor/doctor.service';
import { FormsModule } from '@angular/forms';
import { PageRepresentation } from '../../../models/page-reprisintation';

@Component({
  selector: 'app-doctor',
  standalone: true,
  imports: [CommonModule, AddDoctorComponent, DoctorCardComponent, FormsModule],
  templateUrl: './doctor.component.html',
  styleUrl: './doctor.component.css'
}) 
export class DoctorComponent {
  doctors: DoctorReprisintation[] = [];
  filteredDoctors: DoctorReprisintation[] = [];
  searchTerm: string = '';

  page: PageRepresentation | null = null;
  totalPages: number = 0;
  currentPage: number = 0;

  constructor(private service:DoctorService){}

  ngOnInit(): void {
    this.loadDoctors(0);
  }

  loadDoctors(page: number = 0, size: number = 4): void {
    this.service.getDoctorsByPage(page, size).subscribe({
      next: (result: PageRepresentation) => {
        this.page = result;
        this.totalPages = result.totalPages;
        this.currentPage = result.number;
        this.filteredDoctors = result.content;
      },
      error: (error) => {
        console.error('Error fetching doctors', error);
      }
    });
  }

  changePage(page: number): void {
    if (page >= 0 && page < this.totalPages) {
      this.loadDoctors(page);
    }
  }

  filterDoctors(): void {
    if (this.page) {
      const searchTerm = this.searchTerm.toLowerCase();
  
      this.filteredDoctors = this.page.content.filter(doctor =>
        (doctor.name?.toLowerCase().includes(searchTerm) || 
         doctor.id?.toString().includes(searchTerm))
      );
    }
  }
  

  onDeleteDoctor(id: number) {
    this.service.deleteDoctor(id).subscribe({
      next: () => {
        this.doctors = this.doctors.filter(doctor => doctor.id !== id); // Update the list after deletion
      },
      error: (error) => {
        console.error('Error deleting specialization:', error);
      }
    });
  }

  onUpdateSpecialization(updatedDoctor: DoctorReprisintation) {
    if (updatedDoctor.id !== undefined ) {
      this.service.updateSpecialization(updatedDoctor.id, updatedDoctor).subscribe({
        next: (result) => {
          console.log('Update successful:', result);
        },
        error: (error) => {
          console.error('Error updating :', error);
        }
      });
    } else {
      console.error(' ID is undefined');
    }

    if (updatedDoctor.id !== undefined && updatedDoctor.specializationID !== undefined) {
      this.service.assignSpecializationToDoctor(updatedDoctor.id, updatedDoctor.specializationID).subscribe({
        next: (result) => {
          console.log('Update successful:', result);
        },
        error: (error) => {
          console.error('Error updating :', error);
        }
      });
    } else {
      console.error(' ID is undefined');
    }
  }

}
 