import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontAdvanceComponent } from './front-advance.component';

describe('FrontAdvanceComponent', () => {
  let component: FrontAdvanceComponent;
  let fixture: ComponentFixture<FrontAdvanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontAdvanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontAdvanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
