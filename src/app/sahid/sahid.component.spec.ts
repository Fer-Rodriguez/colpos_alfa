import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SahidComponent } from './sahid.component';

describe('SahidComponent', () => {
  let component: SahidComponent;
  let fixture: ComponentFixture<SahidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SahidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SahidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
