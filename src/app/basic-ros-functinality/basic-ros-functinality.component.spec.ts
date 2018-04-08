import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicRosFunctinalityComponent } from './basic-ros-functinality.component';

describe('BasicRosFunctinalityComponent', () => {
  let component: BasicRosFunctinalityComponent;
  let fixture: ComponentFixture<BasicRosFunctinalityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicRosFunctinalityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicRosFunctinalityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
