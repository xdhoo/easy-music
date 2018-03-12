import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioStationComponent } from './radio-station.component';

describe('RadioStationComponent', () => {
  let component: RadioStationComponent;
  let fixture: ComponentFixture<RadioStationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadioStationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioStationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
