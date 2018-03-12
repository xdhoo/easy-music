import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiclistComponent } from './miclist.component';

describe('MiclistComponent', () => {
  let component: MiclistComponent;
  let fixture: ComponentFixture<MiclistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiclistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiclistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
