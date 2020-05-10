import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CommentLanguage, ICommentLanguage} from './comment.language';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {

  @Input() commentValue: string;
  @Output() comment = new EventEmitter<string>();
  commentText: ICommentLanguage;

  constructor(private readonly commentLanguage: CommentLanguage) { }

  ngOnInit() {
    this.commentText = this.commentLanguage[localStorage.getItem('arizToolLanguageCode')];

  }

  /**
   * Send the value of the comment to the parent.
   */
  sendComment(): void {
    this.comment.emit(this.commentValue);
  }

}
