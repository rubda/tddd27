import User from '../models/user';


// Get all users
export function getUsers(req, res) {
    User.find({}, (err, users) => {
        if (err) res.status(500).send(err);

        res.status(200).json(users);
    });
}


// Get one user
export function getUser(req, res) {
    User.findById(req.params.id, (err, users) => {
        if (err) res.status(500).send(err);

        res.status(200).json(users);
    });
}


// Create a user
export function addUser(req, res) {
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
}
