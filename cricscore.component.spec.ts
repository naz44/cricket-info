import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CricscoreComponent } from './cricscore.component';

describe('CricscoreComponent', () => {
  let component: CricscoreComponent;
  let fixture: ComponentFixture<CricscoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CricscoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CricscoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
