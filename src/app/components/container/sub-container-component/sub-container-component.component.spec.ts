import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubContainerComponentComponent } from './sub-container-component.component';

describe('SubContainerComponentComponent', () => {
  let component: SubContainerComponentComponent;
  let fixture: ComponentFixture<SubContainerComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubContainerComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubContainerComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
