import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeBiographyComponent } from './change-biography.component';

describe('ChangeBiographyComponent', () => {
  let component: ChangeBiographyComponent;
  let fixture: ComponentFixture<ChangeBiographyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeBiographyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeBiographyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
