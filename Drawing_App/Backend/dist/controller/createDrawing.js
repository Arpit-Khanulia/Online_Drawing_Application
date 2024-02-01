"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDrawing = void 0;
const drawingsModel_1 = require("../model/drawingsModel");
async function createDrawing(req, res) {
    try {
        const newDrawing = new drawingsModel_1.Drawingdb();
        await newDrawing.save();
        console.log('create ke time pe print hora', newDrawing);
        res.status(201).json(newDrawing);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}
exports.createDrawing = createDrawing;
