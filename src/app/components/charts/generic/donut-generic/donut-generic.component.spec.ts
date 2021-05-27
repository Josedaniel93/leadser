import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonutGenericComponent } from './donut-generic.component';

describe('DonutGenericComponent', () => {
  let component: DonutGenericComponent;
  let fixture: ComponentFixture<DonutGenericComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonutGenericComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonutGenericComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
