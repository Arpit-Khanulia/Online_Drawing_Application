"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteDrawingById = void 0;
const drawingsModel_1 = require("../model/drawingsModel");
async function deleteDrawingById(req, res) {
    const id = req.params.id;
    try {
        const drawing = await drawingsModel_1.Drawingdb.findByIdAndDelete(id);
        if (!drawing)
            throw new Error('No drawing found');
        res.status(200).json({ message: 'Drawing deleted successfully' });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}
exports.deleteDrawingById = deleteDrawingById;
