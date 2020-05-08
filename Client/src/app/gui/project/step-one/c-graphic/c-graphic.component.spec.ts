import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CGraphicComponent } from './c-graphic.component';

describe('CGraphicComponent', () => {
  let component: CGraphicComponent;
  let fixture: ComponentFixture<CGraphicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CGraphicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CGraphicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
