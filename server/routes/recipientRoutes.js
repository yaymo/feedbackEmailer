const requireLogin = require('../middlewares/requireLogin');
const mongoose = require('mongoose');

const Recipient = mongoose.model('recipients');

module.exports = app => {

    app.get('/api/recipients', async (req, res) => {
        const recipients = await Recipient.find({ _user: req.user.id });

        res.send(recipients);
    });

    app.post('/api/recipients', async (req, res) => {
        const { email, firstName, lastName } = req.body;
        const recipient = new Recipient({
            email,
            firstName,
            lastName,
            _user: req.user.id
        });
        try {
            await recipient.save();
            res.send(recipient);
        }
        catch(err) {
            res.send(400).send(err);
        }
    });

    app.delete('/api/recipients/:recipientId', async (req, res) => {
        try {
            await Recipient
            .findByIdAndRemove({ _id: req.params.recipientId })
            .exec();
            res.sendStatus(200).json();
        }
        catch(err) {
            res.status(400).send(err);
        }
    });
}