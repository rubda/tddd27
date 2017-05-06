import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    age: {type: Number, min: 18, max: 65},
    desc: String,
    email: String,
    github: String,
    contacted: {type: Boolean, default: false},
    favourite: {type: Boolean, default: false},
});

export default mongoose.model('User', userSchema);