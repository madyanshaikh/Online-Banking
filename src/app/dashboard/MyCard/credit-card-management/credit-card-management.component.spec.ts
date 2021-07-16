import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditCardManagementComponent } from './credit-card-management.component';

describe('CreditCardManagementComponent', () => {
  let component: CreditCardManagementComponent;
  let fixture: ComponentFixture<CreditCardManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditCardManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditCardManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
