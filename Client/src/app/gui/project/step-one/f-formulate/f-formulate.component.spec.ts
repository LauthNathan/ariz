import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FFormulateComponent } from './f-formulate.component';

describe('FFormulateComponent', () => {
  let component: FFormulateComponent;
  let fixture: ComponentFixture<FFormulateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FFormulateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FFormulateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
