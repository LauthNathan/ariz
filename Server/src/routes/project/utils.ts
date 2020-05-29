interface Project {
  ownerId: string;
  collaborators?: { id: string; }[];
}

export function isOwner(userId: string, project: Project|null) {
  if (project && project.ownerId===userId) return true;
  return false;
}

export function isOwnerOrCollaborator(userId: string, project: Project|null) {
  if (project && project.collaborators && [project.ownerId, ...project.collaborators.map(c => c.id)].includes(userId)) return true;
  return false;
}
