import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicationCardComponent } from './medication-card.component';

describe('MedicationCardComponent', () => {
  let component: MedicationCardComponent;
  let fixture: ComponentFixture<MedicationCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MedicationCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MedicationCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
