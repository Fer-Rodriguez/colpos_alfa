import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FernandoJPComponent } from './fernando-jp.component';

describe('FernandoJPComponent', () => {
  let component: FernandoJPComponent;
  let fixture: ComponentFixture<FernandoJPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FernandoJPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FernandoJPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
