import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangePreferencesComponent } from './change-preferences.component';

describe('ChangePreferencesComponent', () => {
  let component: ChangePreferencesComponent;
  let fixture: ComponentFixture<ChangePreferencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangePreferencesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangePreferencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
