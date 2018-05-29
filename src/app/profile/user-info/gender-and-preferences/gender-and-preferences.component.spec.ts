import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenderAndPreferencesComponent } from './gender-and-preferences.component';

describe('GenderAndPreferencesComponent', () => {
  let component: GenderAndPreferencesComponent;
  let fixture: ComponentFixture<GenderAndPreferencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenderAndPreferencesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenderAndPreferencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
