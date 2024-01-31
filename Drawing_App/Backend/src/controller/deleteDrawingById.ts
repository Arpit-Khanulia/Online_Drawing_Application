import { Request, Response } from 'express';
import { Drawingdb } from '../model/drawingsModel';

async function deleteDrawingById(req: Request, res: Response) {
  const id = req.params.id;
  try {
    const drawing = await Drawingdb.findByIdAndDelete(id);
    if (!drawing) throw new Error('No drawing found');
    res.status(200).json({ message: 'Drawing deleted successfully' });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
}

export { deleteDrawingById };
