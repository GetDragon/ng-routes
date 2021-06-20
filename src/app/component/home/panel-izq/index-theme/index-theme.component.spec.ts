import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexThemeComponent } from './index-theme.component';

describe('IndexThemeComponent', () => {
  let component: IndexThemeComponent;
  let fixture: ComponentFixture<IndexThemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexThemeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
