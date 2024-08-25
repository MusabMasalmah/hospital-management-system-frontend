import { Component, OnInit } from '@angular/core';
import { AddSpecializationComponent } from '../add-specialization/add-specialization.component';
import { CommonModule } from '@angular/common';
import { SpecializationService } from '../../../services/Specialization/specialization.service';
import { SpecializationRepresintation } from '../../../models/specialization-represintation';
import { SpecalizationCardComponent } from '../specalization-card/specalization-card.component';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-add',
  standalone: true, 
  imports: [CommonModule, AddSpecializationComponent, SpecalizationCardComponent, FormsModule],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent implements OnInit{
  specs: SpecializationRepresintation[] = [];
  filteredSpecs: SpecializationRepresintation[] = [];
  searchTerm: string = '';
  isRefreshed: boolean = false;

  constructor(
    private service:SpecializationService
  ){}

  ngOnInit(): void {
    const needsRefresh = localStorage.getItem('needsRefresh');

    if (needsRefresh === 'true') {
      localStorage.removeItem('needsRefresh'); // Clear the flag after using it
      window.location.reload(); // Reload the page if needed
    } else {
      this.loadSpecializations();
    }
  }

  loadSpecializations(): void {
    this.service.getAllSpecializations().subscribe({
      next: (result) => {
        this.specs = result;
        this.filteredSpecs = result;
      },
      error: (err) => {
        console.error('Error loading specializations', err);
      }
    });
  }

  filterSpecializations(): void {
    const searchTermLower = this.searchTerm.toLowerCase();
    this.filteredSpecs = this.specs.filter((spec) =>
      (spec.name || '').toLowerCase().includes(searchTermLower)
    );
  }
  

  onDeleteSpecialization(id: number) {
    this.service.deleteSpecialization(id).subscribe({
      next: () => {
        this.specs = this.specs.filter(spec => spec.id !== id); // Update the list after deletion
        window.location.reload();
      },
      error: (error) => {
        console.error('Error deleting specialization:', error);
      }
    });
  }

  onUpdateSpecialization(updatedSpec: SpecializationRepresintation) {
    if (updatedSpec.id !== undefined) {
      this.service.updateSpecialization(updatedSpec.id, updatedSpec).subscribe({
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
