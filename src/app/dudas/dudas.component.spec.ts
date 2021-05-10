import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DudasComponent } from './dudas.component';

describe('DudasComponent', () => {
  let component: DudasComponent;
  let fixture: ComponentFixture<DudasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DudasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DudasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
