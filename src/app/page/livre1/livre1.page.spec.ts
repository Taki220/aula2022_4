import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Livre1Page } from './livre1.page';

describe('Livre1Page', () => {
  let component: Livre1Page;
  let fixture: ComponentFixture<Livre1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Livre1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
