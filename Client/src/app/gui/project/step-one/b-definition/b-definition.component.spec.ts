import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BDefinitionComponent } from './b-definition.component';

describe('BDefinitionComponent', () => {
  let component: BDefinitionComponent;
  let fixture: ComponentFixture<BDefinitionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BDefinitionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BDefinitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
