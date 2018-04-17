import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizingAUrdfComponent } from './visualizing-a-urdf.component';

describe('VisualizingAUrdfComponent', () => {
  let component: VisualizingAUrdfComponent;
  let fixture: ComponentFixture<VisualizingAUrdfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualizingAUrdfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizingAUrdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
