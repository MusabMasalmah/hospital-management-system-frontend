import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SpecializationRepresintation } from '../../../models/specialization-represintation';
import { SpecializationService } from '../../../services/Specialization/specialization.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-specialization',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './add-specialization.component.html',
  styleUrl: './add-specialization.component.css'
})
export class AddSpecializationComponent {
  spec: SpecializationRepresintation = {};
  

  constructor(private service: SpecializationService, private router: Router){}

  addSpec() {
    this.service.addSpecialization(this.spec).subscribe({
      next: (result) => {
        console.log('Specialization added successfully:', result);
        window.location.reload(); // Refreshes the page
      },
      error: (error) => {
        console.error('Error adding specialization:', error);
      }
    });
  }

}
 