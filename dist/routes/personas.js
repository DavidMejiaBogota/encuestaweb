"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const personas_1 = require("../controllers/personas");
const router = (0, express_1.Router)();
router.get('/', personas_1.getPersonas);
router.get('/:id', personas_1.getPersona);
router.post('/', personas_1.createPersona);
router.put('/:id', personas_1.updatePersona);
router.delete('/:id', personas_1.deletePersona);
exports.default = router;
//# sourceMappingURL=personas.js.map