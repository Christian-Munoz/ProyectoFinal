import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullStackVueComponent } from './full-stack-vue.component';

describe('FullStackVueComponent', () => {
  let component: FullStackVueComponent;
  let fixture: ComponentFixture<FullStackVueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullStackVueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FullStackVueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
