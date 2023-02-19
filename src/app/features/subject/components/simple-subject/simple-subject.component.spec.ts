import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleSubjectComponent } from './simple-subject.component';

describe('SimpleSubjectComponent', () => {
  let component: SimpleSubjectComponent;
  let fixture: ComponentFixture<SimpleSubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleSubjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimpleSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
