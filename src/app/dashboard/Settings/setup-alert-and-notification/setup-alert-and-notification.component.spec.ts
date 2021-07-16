import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupAlertAndNotificationComponent } from './setup-alert-and-notification.component';

describe('SetupAlertAndNotificationComponent', () => {
  let component: SetupAlertAndNotificationComponent;
  let fixture: ComponentFixture<SetupAlertAndNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetupAlertAndNotificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupAlertAndNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
