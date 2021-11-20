import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const PersonSchema = new Schema({
    name: String,
    age: String,
    phone: String,
}, { timestamps: true });

const Person = mongoose.model('Person', PersonSchema);

export default Person;