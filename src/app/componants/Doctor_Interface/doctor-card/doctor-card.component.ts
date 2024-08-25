import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DoctorReprisintation } from '../../../models/doctor-reprisintation';
import { CommonModule, NgForOf, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SpecializationRepresintation } from '../../../models/specialization-represintation';
import { SpecializationService } from '../../../services/Specialization/specialization.service';

@Component({
  selector: 'app-doctor-card',
  standalone: true,
  imports: [FormsModule, CommonModule, NgIf, NgForOf],
  templateUrl: './doctor-card.component.html',
  styleUrl: './doctor-card.component.css'
})
export class DoctorCardComponent {
  specs: SpecializationRepresintation[] = [];

  @Input()
  doctor: DoctorReprisintation = {};
  @Output()  
  delete = new EventEmitter<number>();

  @Output() 
  update = new EventEmitter<DoctorReprisintation>();

  @Input() 
  isEditing: boolean = false;

  constructor(private specService: SpecializationService){}

  ngOnInit(): void {
    this.specService.getAllSpecializations().subscribe(specs => {
      this.specs = specs;
    });
  }


  onEdit() {
    this.isEditing = true;
  }

  onSave() {
    this.isEditing = false;
    console.log("The id = "+this.doctor.specializationID);
    this.update.emit(this.doctor); // Emit the updated spec
  }

  onDelete() {
    this.delete.emit(this.doctor.id); // Emit the ID to the parent component
    window.location.reload();
  } 
}
 