import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgcardComponent } from './imgcard.component';

describe('ImgcardComponent', () => {
  let component: ImgcardComponent;
  let fixture: ComponentFixture<ImgcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImgcardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
