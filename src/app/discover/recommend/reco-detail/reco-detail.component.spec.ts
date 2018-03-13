import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecoDetailComponent } from './reco-detail.component';

describe('RecoDetailComponent', () => {
  let component: RecoDetailComponent;
  let fixture: ComponentFixture<RecoDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecoDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
