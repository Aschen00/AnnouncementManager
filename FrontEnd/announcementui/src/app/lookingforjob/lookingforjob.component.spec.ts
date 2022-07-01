import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LookingforjobComponent } from './lookingforjob.component';

describe('LookingforjobComponent', () => {
  let component: LookingforjobComponent;
  let fixture: ComponentFixture<LookingforjobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LookingforjobComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LookingforjobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
