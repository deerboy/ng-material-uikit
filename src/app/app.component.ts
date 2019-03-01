import { Component } from '@angular/core';
import { Comment } from 'projects/material-popular-uikit/src/public_api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'material-mock-set';
  comment: Comment = {
    name: 'Taro',
    date: new Date(),
    text: 'コメントです',
    avatarURL: 'https://qiita-image-store.s3.amazonaws.com/0/200431/profile-images/1520258530'
  };
}
