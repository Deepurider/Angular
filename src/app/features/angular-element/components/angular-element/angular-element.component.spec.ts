import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularElementComponent } from './angular-element.component';

describe('AngularElementComponent', () => {
  let component: AngularElementComponent;
  let fixture: ComponentFixture<AngularElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularElementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
