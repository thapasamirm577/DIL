import mongoose from "mongoose";

const sagaSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
});

const Saga = mongoose.model("Saga", sagaSchema);
export default Saga;
