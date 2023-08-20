import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagecommentComponent } from './pagecomment.component';

describe('PagecommentComponent', () => {
  let component: PagecommentComponent;
  let fixture: ComponentFixture<PagecommentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PagecommentComponent]
    });
    fixture = TestBed.createComponent(PagecommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
