"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDrawingById = void 0;
const drawingsModel_1 = require("../model/drawingsModel");
const getDrawingById = async (req, res) => {
    const { id } = req.params;
    try {
        const drawing = await drawingsModel_1.Drawingdb.findById(id);
        if (!drawing) {
            return res.status(404).send('drawing not found');
        }
        res.status(200).json(drawing);
    }
    catch (error) {
        res.status(500).send('Error fetching drawing');
    }
};
exports.getDrawingById = getDrawingById;
