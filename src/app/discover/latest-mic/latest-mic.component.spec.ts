import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestMicComponent } from './latest-mic.component';

describe('LatestMicComponent', () => {
  let component: LatestMicComponent;
  let fixture: ComponentFixture<LatestMicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LatestMicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestMicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
