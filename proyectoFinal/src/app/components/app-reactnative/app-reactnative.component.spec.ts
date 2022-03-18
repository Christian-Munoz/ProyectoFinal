import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppReactnativeComponent } from './app-reactnative.component';

describe('AppReactnativeComponent', () => {
  let component: AppReactnativeComponent;
  let fixture: ComponentFixture<AppReactnativeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppReactnativeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppReactnativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
