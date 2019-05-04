import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceFoundsComponent } from './finance-founds.component';

describe('FinanceFoundsComponent', () => {
  let component: FinanceFoundsComponent;
  let fixture: ComponentFixture<FinanceFoundsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinanceFoundsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinanceFoundsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
