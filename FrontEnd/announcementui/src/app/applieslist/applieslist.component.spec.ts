import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplieslistComponent } from './applieslist.component';

describe('ApplieslistComponent', () => {
  let component: ApplieslistComponent;
  let fixture: ComponentFixture<ApplieslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplieslistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplieslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
