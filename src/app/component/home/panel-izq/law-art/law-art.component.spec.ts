import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LawArtComponent } from './law-art.component';

describe('LawArtComponent', () => {
  let component: LawArtComponent;
  let fixture: ComponentFixture<LawArtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LawArtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LawArtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
