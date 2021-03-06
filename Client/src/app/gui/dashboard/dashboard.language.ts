export interface IDashboardLanguage {
  personalProject: string;
  sharedProjects: string;
}

export class DashboardLanguage {
  gb: IDashboardLanguage = {
    personalProject: 'Your projects',
    sharedProjects: 'Projects shared with you'
  };

  fr: IDashboardLanguage = {
    personalProject: 'Vos projets',
    sharedProjects: 'Projets partagés avec vous'
  };
}
