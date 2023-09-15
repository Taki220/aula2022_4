import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WikiminecraftPage } from './wikiminecraft.page';

describe('WikiminecraftPage', () => {
  let component: WikiminecraftPage;
  let fixture: ComponentFixture<WikiminecraftPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(WikiminecraftPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
