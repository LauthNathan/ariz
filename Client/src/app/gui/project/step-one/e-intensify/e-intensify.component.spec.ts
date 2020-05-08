import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EIntensifyComponent } from './e-intensify.component';

describe('EIntensifyComponent', () => {
  let component: EIntensifyComponent;
  let fixture: ComponentFixture<EIntensifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EIntensifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EIntensifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
