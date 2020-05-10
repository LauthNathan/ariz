export interface ICommentLanguage {
  comment: string;
}

export class CommentLanguage {
  eng: ICommentLanguage = {
    comment: 'Comment'
  };

  fr: ICommentLanguage = {
    comment: 'Commentaire'
  };
}
