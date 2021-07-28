import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EStatementRequestComponent } from './e-statement-request.component';

describe('EStatementRequestComponent', () => {
  let component: EStatementRequestComponent;
  let fixture: ComponentFixture<EStatementRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EStatementRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EStatementRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
