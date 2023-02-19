import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsycSubjectComponent } from './asyc-subject.component';

describe('AsycSubjectComponent', () => {
  let component: AsycSubjectComponent;
  let fixture: ComponentFixture<AsycSubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsycSubjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsycSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
