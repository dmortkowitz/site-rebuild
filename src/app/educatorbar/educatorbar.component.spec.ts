import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EducatorbarComponent } from './educatorbar.component';

describe('EducatorbarComponent', () => {
  let component: EducatorbarComponent;
  let fixture: ComponentFixture<EducatorbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EducatorbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EducatorbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
