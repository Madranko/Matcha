import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeGenderComponent } from './change-gender.component';

describe('ChangeGenderComponent', () => {
  let component: ChangeGenderComponent;
  let fixture: ComponentFixture<ChangeGenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeGenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeGenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
