import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullStackReactiveComponent } from './full-stack-reactive.component';

describe('FullStackReactiveComponent', () => {
  let component: FullStackReactiveComponent;
  let fixture: ComponentFixture<FullStackReactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullStackReactiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FullStackReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
