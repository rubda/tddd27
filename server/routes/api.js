import express from 'express';
import mongoose from 'mongoose';

const router = express.Router();

const dbHost = 'mongodb://database/TDDD272017_applicants';

mongoose.connect(dbHost);

// User schema
const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    desc: String
});

const User = mongoose.model('User', userSchema);

router.get('/', (req, res) => {
   res.send("First draft of API works");
});


// Get all users
router.get('/users', (req, res) => {
    User.find({}, (err, users) => {
        if (err) res.status(500).send(err);

        res.status(200).json(users);
    });
});


// Get one user
router.get('/users/:id', (req, res) => {
    User.findById(req.params.id, (err, users) => {
        if (err) res.status(500).send(err);

        res.status(200).json(users);
    });
});


// Create a user
router.post('/users', (req, res) => {
    let user = new User({
        name: req.body.name,
        age: req.body.age,
        desc: req.body.desc
    });

    user.save(err => {
        if (err) res.status(500).send(err);

        res.status(201).json({
            message: "User created"
        });
    });
});

export default router;