import mongoose from 'mongoose';
const {
  Schema
} = mongoose;
const TagSchema = new Schema({
  title: String,
  color: String,
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    autopopulate: true
  },
  list: {
    type: Schema.Types.ObjectId,
    ref: 'List',
    autopopulate: true
  },
  createdAt: String,
  updatedAt: String
});
TagSchema.plugin(require('mongoose-autopopulate'));
const TagModel = mongoose.model('Tag', TagSchema);
export { TagModel as Tag };