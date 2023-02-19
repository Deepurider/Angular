import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BehaveSubjectComponent } from './behave-subject.component';

describe('BehaveSubjectComponent', () => {
  let component: BehaveSubjectComponent;
  let fixture: ComponentFixture<BehaveSubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BehaveSubjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BehaveSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
