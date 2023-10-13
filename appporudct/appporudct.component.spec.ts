import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppporudctComponent } from './appporudct.component';

describe('AppporudctComponent', () => {
  let component: AppporudctComponent;
  let fixture: ComponentFixture<AppporudctComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppporudctComponent]
    });
    fixture = TestBed.createComponent(AppporudctComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
