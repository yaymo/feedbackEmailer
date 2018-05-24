const mongoose = require('mongoose');
const { Schema } = mongoose;

const recipientSchema = new Schema({
    email: String,
    firstName: String,
    lastName: String,
    _user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    responded: { type: Boolean, default: false }
});

mongoose.model('recipients', recipientSchema);