import mongoose from 'mongoose'




const drawingSchema = new mongoose.Schema({
    drawingData: { type: Object, required: true }
});


// model
const Drawingdb = mongoose.model('Drawings', drawingSchema);

export {Drawingdb};


