import mongoose from 'mongoose';
const {
  Schema
} = mongoose;
const ItemSchema = new Schema({
  title: String,
  icon: String,
  list: {
    type: Schema.Types.ObjectId,
    ref: 'List',
    autopopulate: true
  },
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    autopopulate: true
  },
  tags: [{
    type: Schema.Types.ObjectId,
    ref: 'Tag',
    autopopulate: true
  }],
  note: String,
  done: Boolean,
  createdAt: String,
  updatedAt: String
});
ItemSchema.plugin(require('mongoose-autopopulate'));
const ItemModel = mongoose.model('Item', ItemSchema);
export { ItemModel as Item };