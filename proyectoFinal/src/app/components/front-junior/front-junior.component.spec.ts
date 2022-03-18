import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontJuniorComponent } from './front-junior.component';

describe('FrontJuniorComponent', () => {
  let component: FrontJuniorComponent;
  let fixture: ComponentFixture<FrontJuniorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontJuniorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontJuniorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
