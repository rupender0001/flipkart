import mongoose from 'mongoose';

const upiSchema = new mongoose.Schema({
    upiId: {
        type: String,
        required: true
    }
});

const UPI = mongoose.model('UPI', upiSchema);

export default UPI;