import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

export interface Comment {
  name: string;
  text: string;
  date: Date;
  avatarURL: string;
}

@Component({
  selector: 'lib-youtube-comment',
  templateUrl: './youtube-comment.component.html',
  styleUrls: ['./youtube-comment.component.scss']
})
export class YoutubeCommentComponent implements OnInit {

  @Input() comment: Comment;
  @Output() clickAvatar = new EventEmitter<void>();
  @Output() clickName = new EventEmitter<void>();
  @Output() clickDate = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

}
