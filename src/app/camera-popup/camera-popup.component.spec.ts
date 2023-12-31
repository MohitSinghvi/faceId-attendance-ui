import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CameraPopupComponent } from './camera-popup.component';

describe('CameraPopupComponent', () => {
  let component: CameraPopupComponent;
  let fixture: ComponentFixture<CameraPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CameraPopupComponent]
    });
    fixture = TestBed.createComponent(CameraPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
