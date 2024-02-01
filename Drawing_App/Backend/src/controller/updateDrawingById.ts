import { Request, Response } from 'express';
import { Drawingdb } from '../model/drawingsModel';




const updateDrawingById = async (req: Request, res: Response) => {
    
    const { id } = req.params;
    const newdata:any = req.body;
    
    try {
        const drawing = await Drawingdb.findById(id);
        
        if (!drawing) {
            return res.status(404).send('drawing not found');
        }

        if (Array.isArray(newdata)) {
            drawing.drawingData = drawing.drawingData.concat(newdata);
        } else {
            return res.status(400).send('Invalid data format');
        }


        drawing.save();

        console.log('data updated successfully in id ',id);
        
        
        res.status(200).json(drawing);
    } catch (error) {
        res.status(500).send('Error updating drawing');
    }
};

export { updateDrawingById };
