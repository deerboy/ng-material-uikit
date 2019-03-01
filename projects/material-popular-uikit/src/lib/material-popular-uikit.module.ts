import { NgModule } from '@angular/core';
import { YoutubeCommentComponent } from './youtube-comment/youtube-comment.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    YoutubeCommentComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [YoutubeCommentComponent]
})
export class MaterialPopularUikitModule { }
