import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VictorManceraComponent } from './victor-mancera.component';

describe('VictorManceraComponent', () => {
  let component: VictorManceraComponent;
  let fixture: ComponentFixture<VictorManceraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VictorManceraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VictorManceraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
