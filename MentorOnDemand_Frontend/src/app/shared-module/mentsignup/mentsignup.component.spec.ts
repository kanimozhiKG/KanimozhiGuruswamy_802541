import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentsignupComponent } from './mentsignup.component';

describe('MentsignupComponent', () => {
  let component: MentsignupComponent;
  let fixture: ComponentFixture<MentsignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentsignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentsignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
