import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSpecializationComponent } from './add-specialization.component';

describe('AddSpecializationComponent', () => {
  let component: AddSpecializationComponent;
  let fixture: ComponentFixture<AddSpecializationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddSpecializationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddSpecializationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
