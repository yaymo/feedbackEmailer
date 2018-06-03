import mongoose from 'mongoose';
const { Schema } = mongoose;

const contactSchema = new Schema({
  email: String,
  firstName: String,
  lastName: String,
  _user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
});
mongoose.model('contact', contactSchema);