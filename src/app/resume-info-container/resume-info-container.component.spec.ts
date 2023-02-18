import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeInfoContainerComponent } from './resume-info-container.component';

describe('ResumeInfoContainerComponent', () => {
  let component: ResumeInfoContainerComponent;
  let fixture: ComponentFixture<ResumeInfoContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumeInfoContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResumeInfoContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
