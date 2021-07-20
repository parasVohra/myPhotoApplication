import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoDeatilsComponent } from './photo-deatils.component';

describe('PhotoDeatilsComponent', () => {
  let component: PhotoDeatilsComponent;
  let fixture: ComponentFixture<PhotoDeatilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotoDeatilsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoDeatilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
