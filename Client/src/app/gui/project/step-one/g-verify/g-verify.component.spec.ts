import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GVerifyComponent } from './g-verify.component';

describe('GVerifyComponent', () => {
  let component: GVerifyComponent;
  let fixture: ComponentFixture<GVerifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GVerifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GVerifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
