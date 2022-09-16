import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZaraComponent } from './zara.component';

describe('ZaraComponent', () => {
  let component: ZaraComponent;
  let fixture: ComponentFixture<ZaraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZaraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZaraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
