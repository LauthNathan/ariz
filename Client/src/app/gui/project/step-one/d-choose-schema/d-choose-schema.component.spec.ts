import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DChooseSchemaComponent } from './d-choose-schema.component';

describe('DChooseSchemaComponent', () => {
  let component: DChooseSchemaComponent;
  let fixture: ComponentFixture<DChooseSchemaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DChooseSchemaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DChooseSchemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
