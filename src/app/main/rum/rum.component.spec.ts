import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RumComponent } from './rum.component';

describe('RumComponent', () => {
  let component: RumComponent;
  let fixture: ComponentFixture<RumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
