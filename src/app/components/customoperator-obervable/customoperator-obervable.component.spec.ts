import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomoperatorObervableComponent } from './customoperator-obervable.component';

describe('CustomoperatorObervableComponent', () => {
  let component: CustomoperatorObervableComponent;
  let fixture: ComponentFixture<CustomoperatorObervableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomoperatorObervableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomoperatorObervableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
