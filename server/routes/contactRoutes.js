import requireLogin from '../middlewares/requireLogin';
import mongoose from 'mongoose';

const Contact = mongoose.model('contact');

module.exports = app => {

    app.get('/api/contacts', async (req, res) => {
        const contactss = await Contact.find({ _user: req.user.id });

        res.send(contacts);
    });

    app.post('/api/contacts', async (req, res) => {
        const { email, firstName, lastName } = req.body;
        const contact = new Contact({
            email,
            firstName,
            lastName,
            _user: req.user.id
        });
        try {
            await contact.save();
            res.send(contact);
        }
        catch(err) {
            res.send(400).send(err);
        }
    });

    app.delete('/api/contacts/:contactId', async (req, res) => {
        try {
            await Contact
            .findByIdAndRemove({ _id: req.params.recipientId })
            .exec();
            res.sendStatus(200).json();
        }
        catch(err) {
            res.status(400).send(err);
        }
    });
}