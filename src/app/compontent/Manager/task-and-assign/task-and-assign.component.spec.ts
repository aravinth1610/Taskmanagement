import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskAndAssignComponent } from './task-and-assign.component';

describe('TaskAndAssignComponent', () => {
  let component: TaskAndAssignComponent;
  let fixture: ComponentFixture<TaskAndAssignComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaskAndAssignComponent]
    });
    fixture = TestBed.createComponent(TaskAndAssignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
