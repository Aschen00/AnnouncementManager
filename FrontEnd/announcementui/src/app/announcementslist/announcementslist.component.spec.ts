import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnouncementslistComponent } from './announcementslist.component';

describe('AnnouncementslistComponent', () => {
  let component: AnnouncementslistComponent;
  let fixture: ComponentFixture<AnnouncementslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnouncementslistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnnouncementslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
