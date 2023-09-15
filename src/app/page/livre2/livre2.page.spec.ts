import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Livre2Page } from './livre2.page';

describe('Livre2Page', () => {
  let component: Livre2Page;
  let fixture: ComponentFixture<Livre2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Livre2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
