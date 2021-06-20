import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelTocComponent } from './rel-toc.component';

describe('RelTocComponent', () => {
  let component: RelTocComponent;
  let fixture: ComponentFixture<RelTocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelTocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RelTocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
