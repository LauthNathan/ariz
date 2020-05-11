export interface IPresentationLanguage {
  title: string;
  p1: string;
  p2: string;
}

export class PresentationLanguage {
  gb: IPresentationLanguage = {
    title: 'Some presentation here',
    p1: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor\n' +
      '  quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean\n' +
      '  ultricies mi vitae est. Mauris placerat eleifend leo.',
    p2: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor\n' +
      '  quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean\n' +
      '  ultricies mi vitae est. Mauris placerat eleifend leo.'
  };

  fr: IPresentationLanguage = {
    title: 'Un peu de présentation',
    p1: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor\n' +
      '  quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean\n' +
      '  ultricies mi vitae est. Mauris placerat eleifend leo.',
    p2: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor\n' +
      '  quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean\n' +
      '  ultricies mi vitae est. Mauris placerat eleifend leo.'
  };
}
