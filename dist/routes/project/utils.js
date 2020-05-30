"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isOwner(userId, project) {
    if (project && project.ownerId === userId)
        return true;
    return false;
}
exports.isOwner = isOwner;
function isOwnerOrCollaborator(userId, project) {
    if (project && project.collaborators && [project.ownerId, ...project.collaborators.map(c => c.id)].includes(userId))
        return true;
    return false;
}
exports.isOwnerOrCollaborator = isOwnerOrCollaborator;
//# sourceMappingURL=utils.js.map