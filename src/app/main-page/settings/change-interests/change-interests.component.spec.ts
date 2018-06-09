import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeInterestsComponent } from './change-interests.component';

describe('ChangeInterestsComponent', () => {
  let component: ChangeInterestsComponent;
  let fixture: ComponentFixture<ChangeInterestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeInterestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeInterestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
