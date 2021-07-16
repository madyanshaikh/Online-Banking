import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterBankFundTransferComponent } from './inter-bank-fund-transfer.component';

describe('InterBankFundTransferComponent', () => {
  let component: InterBankFundTransferComponent;
  let fixture: ComponentFixture<InterBankFundTransferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterBankFundTransferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterBankFundTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
