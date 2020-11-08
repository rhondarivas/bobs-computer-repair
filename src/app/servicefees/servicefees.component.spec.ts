import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceFeesComponent } from './servicefees.component';

describe('ServiceFeesComponent', () => {
  let component: ServiceFeesComponent;
  let fixture: ComponentFixture<ServiceFeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceFeesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceFeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
