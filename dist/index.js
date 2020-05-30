"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./lib/env");
const client_1 = require("@prisma/client");
const express_1 = __importDefault(require("express"));
const auth_1 = __importDefault(require("./routes/authentication/auth"));
const project_1 = __importDefault(require("./routes/project/project"));
const stepOne_1 = __importDefault(require("./routes/project/steps/stepOne"));
const test_1 = __importDefault(require("./routes/test"));
const cors_1 = __importDefault(require("cors"));
const PORT = parseInt(process.env.port || '3000');
exports.prisma = new client_1.PrismaClient();
const app = express_1.default();
app.use(cors_1.default());
app.use(express_1.default.json());
app.use('/public', express_1.default.static('uploads'));
app.use('/api', [auth_1.default, project_1.default, stepOne_1.default]);
app.use('/test', test_1.default);
app.listen(PORT, () => console.log(`🚀 Server started : http://localhost:${PORT}`));
//# sourceMappingURL=index.js.map