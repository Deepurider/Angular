import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeNgContainerComponent } from './prime-ng-container.component';

describe('PrimeNgContainerComponent', () => {
  let component: PrimeNgContainerComponent;
  let fixture: ComponentFixture<PrimeNgContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimeNgContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimeNgContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
