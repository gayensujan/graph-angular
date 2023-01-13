import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaderComponent } from './rader.component';

describe('RaderComponent', () => {
  let component: RaderComponent;
  let fixture: ComponentFixture<RaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
