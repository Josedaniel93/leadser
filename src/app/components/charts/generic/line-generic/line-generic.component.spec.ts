import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineGenericComponent } from './line-generic.component';

describe('LineGenericComponent', () => {
  let component: LineGenericComponent;
  let fixture: ComponentFixture<LineGenericComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LineGenericComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LineGenericComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
