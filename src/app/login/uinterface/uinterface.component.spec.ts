import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UinterfaceComponent } from './uinterface.component';

describe('UinterfaceComponent', () => {
  let component: UinterfaceComponent;
  let fixture: ComponentFixture<UinterfaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UinterfaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UinterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
