import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesarrolloBackEndComponent } from './desarrollo-back-end.component';

describe('DesarrolloBackEndComponent', () => {
  let component: DesarrolloBackEndComponent;
  let fixture: ComponentFixture<DesarrolloBackEndComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesarrolloBackEndComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesarrolloBackEndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
