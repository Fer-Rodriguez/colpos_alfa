import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaduComponent } from './dadu.component';

describe('DaduComponent', () => {
  let component: DaduComponent;
  let fixture: ComponentFixture<DaduComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DaduComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DaduComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
