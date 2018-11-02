import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainsiteComponent } from './mainsite.component';

describe('MainsiteComponent', () => {
  let component: MainsiteComponent;
  let fixture: ComponentFixture<MainsiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainsiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
