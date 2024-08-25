import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecalizationCardComponent } from './specalization-card.component';

describe('SpecalizationCardComponent', () => {
  let component: SpecalizationCardComponent;
  let fixture: ComponentFixture<SpecalizationCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpecalizationCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpecalizationCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
