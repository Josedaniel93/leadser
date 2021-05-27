import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BubbleInfoGenericComponent } from './bubble-info-generic.component';

describe('BubbleInfoGenericComponent', () => {
  let component: BubbleInfoGenericComponent;
  let fixture: ComponentFixture<BubbleInfoGenericComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BubbleInfoGenericComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BubbleInfoGenericComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
