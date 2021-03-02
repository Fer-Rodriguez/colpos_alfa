import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChavaComponent } from './chava.component';

describe('ChavaComponent', () => {
  let component: ChavaComponent;
  let fixture: ComponentFixture<ChavaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChavaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChavaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
