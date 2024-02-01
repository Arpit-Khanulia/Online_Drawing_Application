"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const createDrawing_1 = require("../controller/createDrawing");
const getDrawingById_1 = require("../controller/getDrawingById");
const deleteDrawingById_1 = require("../controller/deleteDrawingById");
const updateDrawingById_1 = require("../controller/updateDrawingById");
const router = express_1.default.Router();
exports.router = router;
router
    .post('/drawings', createDrawing_1.createDrawing)
    .get('/drawings/:id', getDrawingById_1.getDrawingById)
    .put('/drawings/:id', updateDrawingById_1.updateDrawingById)
    .delete('/drawings/:id', deleteDrawingById_1.deleteDrawingById);
