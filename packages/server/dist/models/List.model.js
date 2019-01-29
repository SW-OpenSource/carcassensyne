/*
  eslint
    "func-names": off,
    "prefer-arrow-callback": off
*/
import mongoose from 'mongoose';
const {
  Schema
} = mongoose;
const ListSchema = new Schema({
  title: String,
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    autopopulate: true
  },
  icon: String,
  items: [{
    type: Schema.Types.ObjectId,
    ref: 'Item',
    autopopulate: true
  }],
  tags: [{
    type: Schema.Types.ObjectId,
    ref: 'Tag',
    autopopulate: true
  }],
  createdAt: String,
  updatedAt: String
});
ListSchema.plugin(require('mongoose-autopopulate'));
const ListModel = mongoose.model('List', ListSchema);
export { ListModel as List };