import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChaqueBookRequestComponent } from './chaque-book-request.component';

describe('ChaqueBookRequestComponent', () => {
  let component: ChaqueBookRequestComponent;
  let fixture: ComponentFixture<ChaqueBookRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChaqueBookRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChaqueBookRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
