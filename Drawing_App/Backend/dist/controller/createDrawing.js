"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDrawing = void 0;
const drawingsModel_1 = require("../model/drawingsModel");
async function createDrawing(req, res) {
    try {
        const drawingData = req.body;
        console.log(drawingData);
        const newDrawing = new drawingsModel_1.Drawingdb({ drawingData });
        await newDrawing.save();
        res.status(201).json(newDrawing);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}
exports.createDrawing = createDrawing;
