import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectGraphComponent } from './project-graph.component';

describe('ProjectGraphComponent', () => {
  let component: ProjectGraphComponent;
  let fixture: ComponentFixture<ProjectGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
