import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItuComponent } from './itu.component';

describe('ItuComponent', () => {
  let component: ItuComponent;
  let fixture: ComponentFixture<ItuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
