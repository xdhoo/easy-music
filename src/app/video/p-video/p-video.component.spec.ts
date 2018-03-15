import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PVideoComponent } from './p-video.component';

describe('PVideoComponent', () => {
  let component: PVideoComponent;
  let fixture: ComponentFixture<PVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
