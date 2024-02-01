import { Request, Response } from 'express';
import { Drawingdb } from '../model/drawingsModel';




async function createDrawing(req: Request, res: Response) {
  try {

    
    const newDrawing = new Drawingdb();
    await newDrawing.save();

    console.log('create ke time pe print hora',newDrawing);
    
    res.status(201).json(newDrawing);

  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
}

export { createDrawing };