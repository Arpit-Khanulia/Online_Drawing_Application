import { Request, Response } from 'express';
import { Drawingdb } from '../model/drawingsModel';


interface DrawingData {
      drawings: string;
    }

async function createDrawing(req: Request, res: Response) {
  try {
    const drawingData:DrawingData = req.body;
    console.log(drawingData);
    
    const newDrawing = new Drawingdb({ drawingData });
    await newDrawing.save();
    res.status(201).json(newDrawing);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
}

export { createDrawing };