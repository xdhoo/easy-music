import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SListComponent } from './s-list.component';

describe('SListComponent', () => {
  let component: SListComponent;
  let fixture: ComponentFixture<SListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
