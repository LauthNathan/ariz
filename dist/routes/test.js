"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const jwt_1 = require("./authentication/jwt");
const router = express_1.Router();
router.get('/', jwt_1.auth, (req, res) => {
    console.log('ok');
    res.json({ test: 'ok' });
});
exports.default = router;
//# sourceMappingURL=test.js.map