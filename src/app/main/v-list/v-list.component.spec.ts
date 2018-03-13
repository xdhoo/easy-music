import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VListComponent } from './v-list.component';

describe('VListComponent', () => {
  let component: VListComponent;
  let fixture: ComponentFixture<VListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
