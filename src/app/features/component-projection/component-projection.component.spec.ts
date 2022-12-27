import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentProjectionComponent } from './component-projection.component';

describe('ComponentProjectionComponent', () => {
  let component: ComponentProjectionComponent;
  let fixture: ComponentFixture<ComponentProjectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentProjectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentProjectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
