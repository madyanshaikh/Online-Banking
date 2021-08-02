import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAdminLoginComponent } from './user-admin-login.component';

describe('UserAdminLoginComponent', () => {
  let component: UserAdminLoginComponent;
  let fixture: ComponentFixture<UserAdminLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserAdminLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAdminLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
