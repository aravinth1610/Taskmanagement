import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViceNavComponent } from './vice-nav.component';

describe('ViceNavComponent', () => {
  let component: ViceNavComponent;
  let fixture: ComponentFixture<ViceNavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViceNavComponent]
    });
    fixture = TestBed.createComponent(ViceNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
