import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VietaskComponent } from './vietask.component';

describe('VietaskComponent', () => {
  let component: VietaskComponent;
  let fixture: ComponentFixture<VietaskComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VietaskComponent]
    });
    fixture = TestBed.createComponent(VietaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
