import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectContainerComponent } from './subject-container.component';

describe('SubjectContainerComponent', () => {
  let component: SubjectContainerComponent;
  let fixture: ComponentFixture<SubjectContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubjectContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
