import express from 'express';

import { createDrawing } from '../controller/createDrawing';
import { getDrawingById } from '../controller/getDrawingById';
import { deleteDrawingById } from '../controller/deleteDrawingById';
import { updateDrawingById } from '../controller/updateDrawingById';

const router = express.Router();


    router
    .post('/drawings', createDrawing)
    .get('/drawings/:id', getDrawingById)
    .put('/drawings/:id', updateDrawingById)
    .delete('/drawings/:id', deleteDrawingById);


export {router}