import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesTimeComponent } from './sales-time.component';

describe('SalesTimeComponent', () => {
  let component: SalesTimeComponent;
  let fixture: ComponentFixture<SalesTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesTimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
