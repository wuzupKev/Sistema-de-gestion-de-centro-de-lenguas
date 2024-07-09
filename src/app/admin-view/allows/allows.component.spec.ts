import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllowsComponent } from './allows.component';

describe('AllowsComponent', () => {
  let component: AllowsComponent;
  let fixture: ComponentFixture<AllowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllowsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
