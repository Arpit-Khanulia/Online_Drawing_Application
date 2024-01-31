"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Drawingdb = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const drawingSchema = new mongoose_1.default.Schema({
    drawingData: { type: Object, required: true }
});
// model
const Drawingdb = mongoose_1.default.model('Drawings', drawingSchema);
exports.Drawingdb = Drawingdb;
