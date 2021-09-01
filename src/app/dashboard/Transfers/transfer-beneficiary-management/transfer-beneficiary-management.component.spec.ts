import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferBeneficiaryManagementComponent } from './transfer-beneficiary-management.component';

describe('TransferBeneficiaryManagementComponent', () => {
  let component: TransferBeneficiaryManagementComponent;
  let fixture: ComponentFixture<TransferBeneficiaryManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransferBeneficiaryManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferBeneficiaryManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
