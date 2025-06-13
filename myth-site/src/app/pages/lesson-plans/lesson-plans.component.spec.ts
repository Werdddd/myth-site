import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonPlansComponent } from './lesson-plans.component';

describe('LessonPlansComponent', () => {
  let component: LessonPlansComponent;
  let fixture: ComponentFixture<LessonPlansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LessonPlansComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LessonPlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
