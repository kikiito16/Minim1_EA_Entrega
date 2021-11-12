"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const vacunado_controller_1 = __importDefault(require("../controllers/vacunado.controller"));
const router = express_1.Router();
router.get('/', vacunado_controller_1.default.getAll);
router.get('/:id', vacunado_controller_1.default.getVacunado);
router.post('/new', vacunado_controller_1.default.newVacunado);
router.put('/update/:id', vacunado_controller_1.default.updateVacunado);
exports.default = router;
