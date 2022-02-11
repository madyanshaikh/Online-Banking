import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanDepartComponent } from './loan-depart.component';

describe('LoanDepartComponent', () => {
  let component: LoanDepartComponent;
  let fixture: ComponentFixture<LoanDepartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanDepartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanDepartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
