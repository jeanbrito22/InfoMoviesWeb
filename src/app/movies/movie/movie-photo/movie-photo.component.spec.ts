import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviePhotoComponent } from './movie-photo.component';

describe('MoviePhotoComponent', () => {
  let component: MoviePhotoComponent;
  let fixture: ComponentFixture<MoviePhotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviePhotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviePhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
