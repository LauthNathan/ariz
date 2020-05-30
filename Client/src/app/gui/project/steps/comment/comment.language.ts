export interface ICommentLanguage {
  comment: string;
}

export class CommentLanguage {
  gb: ICommentLanguage = {
    comment: 'Comment'
  };

  fr: ICommentLanguage = {
    comment: 'Commentaire'
  };
}
