import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AReformulationComponent } from './a-reformulation.component';

describe('AReformulationComponent', () => {
  let component: AReformulationComponent;
  let fixture: ComponentFixture<AReformulationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AReformulationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AReformulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
