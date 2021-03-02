import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FtorreComponent } from './ftorre.component';

describe('FtorreComponent', () => {
  let component: FtorreComponent;
  let fixture: ComponentFixture<FtorreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FtorreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FtorreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
