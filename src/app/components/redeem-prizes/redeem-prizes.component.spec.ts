import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedeemPrizesComponent } from './redeem-prizes.component';

describe('RedeemPrizesComponent', () => {
  let component: RedeemPrizesComponent;
  let fixture: ComponentFixture<RedeemPrizesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedeemPrizesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedeemPrizesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
