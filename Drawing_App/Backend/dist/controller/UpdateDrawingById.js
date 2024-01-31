"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateDrawingById = void 0;
const drawingsModel_1 = require("../model/drawingsModel");
const updateDrawingById = async (req, res) => {
    const { id } = req.params;
    const { drawings } = req.body;
    try {
        const drawing = await drawingsModel_1.Drawingdb.findById(id);
        if (!drawing) {
            return res.status(404).send('drawing not found');
        }
        drawing.drawingData = drawings;
        drawing.save();
        res.status(200).json(drawing);
    }
    catch (error) {
        res.status(500).send('Error updating drawing');
    }
};
exports.updateDrawingById = updateDrawingById;
