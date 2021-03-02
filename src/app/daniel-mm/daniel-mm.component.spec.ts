import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DanielMMComponent } from './daniel-mm.component';

describe('DanielMMComponent', () => {
  let component: DanielMMComponent;
  let fixture: ComponentFixture<DanielMMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DanielMMComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DanielMMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
