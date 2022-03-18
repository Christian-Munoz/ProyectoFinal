import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontSeniorComponent } from './front-senior.component';

describe('FrontSeniorComponent', () => {
  let component: FrontSeniorComponent;
  let fixture: ComponentFixture<FrontSeniorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontSeniorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontSeniorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
