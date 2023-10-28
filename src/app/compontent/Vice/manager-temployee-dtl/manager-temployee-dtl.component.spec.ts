import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerTEmployeeDtlComponent } from './manager-temployee-dtl.component';

describe('ManagerTEmployeeDtlComponent', () => {
  let component: ManagerTEmployeeDtlComponent;
  let fixture: ComponentFixture<ManagerTEmployeeDtlComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManagerTEmployeeDtlComponent]
    });
    fixture = TestBed.createComponent(ManagerTEmployeeDtlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
