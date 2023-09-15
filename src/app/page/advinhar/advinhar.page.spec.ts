import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdvinharPage } from './advinhar.page';

describe('AdvinharPage', () => {
  let component: AdvinharPage;
  let fixture: ComponentFixture<AdvinharPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AdvinharPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
