import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StopChaqueComponent } from './stop-chaque.component';

describe('StopChaqueComponent', () => {
  let component: StopChaqueComponent;
  let fixture: ComponentFixture<StopChaqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StopChaqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StopChaqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
