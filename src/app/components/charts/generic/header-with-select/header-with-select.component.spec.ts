import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderWithSelectComponent } from './header-with-select.component';

describe('HeaderWithSelectComponent', () => {
  let component: HeaderWithSelectComponent;
  let fixture: ComponentFixture<HeaderWithSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderWithSelectComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderWithSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
