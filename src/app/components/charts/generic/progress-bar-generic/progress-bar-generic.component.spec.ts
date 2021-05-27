import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressBarGenericComponent } from './progress-bar-generic.component';

describe('ProgressBarGenericComponent', () => {
  let component: ProgressBarGenericComponent;
  let fixture: ComponentFixture<ProgressBarGenericComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgressBarGenericComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressBarGenericComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
