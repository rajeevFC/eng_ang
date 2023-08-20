import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagealbumComponent } from './pagealbum.component';

describe('PagealbumComponent', () => {
  let component: PagealbumComponent;
  let fixture: ComponentFixture<PagealbumComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PagealbumComponent]
    });
    fixture = TestBed.createComponent(PagealbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
