import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubeCommentComponent } from './youtube-comment.component';

describe('YoutubeCommentComponent', () => {
  let component: YoutubeCommentComponent;
  let fixture: ComponentFixture<YoutubeCommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YoutubeCommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YoutubeCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
