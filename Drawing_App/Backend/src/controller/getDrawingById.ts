import { Request, Response } from 'express';
import { Drawingdb } from '../model/drawingsModel';

const getDrawingById = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const drawing = await Drawingdb.findById(id);

        if (!drawing) {
            return res.status(404).send('drawing not found');
        }

        res.status(200).json(drawing);
    } catch (error) {
        res.status(500).send('Error fetching drawing');
    }
};

export { getDrawingById };

