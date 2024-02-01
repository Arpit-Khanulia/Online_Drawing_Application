import mongoose from 'mongoose'




const drawingSchema = new mongoose.Schema({
    drawingData: Array
});


// model
const Drawingdb = mongoose.model('Drawings', drawingSchema);

export {Drawingdb};


