import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullStackAngularComponent } from './full-stack-angular.component';

describe('FullStackAngularComponent', () => {
  let component: FullStackAngularComponent;
  let fixture: ComponentFixture<FullStackAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullStackAngularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FullStackAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
