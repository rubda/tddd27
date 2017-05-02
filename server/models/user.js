import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    age: Number,
    desc: String
});

export default mongoose.model('User', userSchema);