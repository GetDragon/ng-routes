import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarDerComponent } from './toolbar-der.component';

describe('ToolbarDerComponent', () => {
  let component: ToolbarDerComponent;
  let fixture: ComponentFixture<ToolbarDerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToolbarDerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarDerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
