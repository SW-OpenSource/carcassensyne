import mongoose from 'mongoose';
import { Tag, List, User } from 'models';
const {
  ObjectId
} = mongoose.Types;
const TagResolver = {
  allTags: async () => {
    const Tags = await Tag.find();
    return Tags;
  },
  findTagById: async args => {
    const tag = await Tag.findById(args._id);
    return tag;
  },
  addTag: async ({
    title,
    color,
    creator,
    list
  }) => {
    if (list) {
      const newTag = new Tag({
        title,
        color,
        list,
        createdAt: new Date()
      });
      const savedTag = await newTag.save();
      const listToUpdate = await List.findById(ObjectId(list));
      const updatedTags = [...listToUpdate.tags, savedTag._id]; // eslint-disable-next-line no-unused-vars

      const updatedList = await List.findByIdAndUpdate(listToUpdate._id, {
        tags: updatedTags
      }, {
        new: true
      });
      return savedTag;
    }

    if (creator) {
      const newTag = new Tag({
        title,
        color,
        creator,
        createdAt: new Date()
      });
      const savedTag = await newTag.save();
      const userToUpdate = await User.findById(ObjectId(creator));
      const updatedTags = [...userToUpdate.tags, savedTag._id]; // eslint-disable-next-line no-unused-vars

      const updatedUser = await User.findByIdAndUpdate(userToUpdate._id, {
        tags: updatedTags
      }, {
        new: true
      });
      return savedTag;
    }

    return new Error('Either a creator ID or a list ID must be supplied');
  },
  updateTag: async args => {
    const {
      _id
    } = args;
    delete args._id;
    args.updatedAt = new Date();
    const updatedTag = await Tag.findByIdAndUpdate(_id, args, {
      new: true
    });
    return updatedTag;
  },
  deleteTag: async ({
    _id
  }) => {
    const deletedTag = await Tag.findByIdAndRemove(_id);

    if (deletedTag.list) {
      const listToUpdate = await List.findById(deletedTag.list);
      const updatedTags = listToUpdate.tags.filter(tag => tag !== _id); // eslint-disable-next-line no-unused-vars

      const updatedList = await List.findByIdAndUpdate(listToUpdate._id, {
        tags: updatedTags
      }, {
        new: true
      });
    } else if (deletedTag.creator) {
      const userToUpdate = await User.findById(deletedTag.creator);
      const updatedTags = userToUpdate.tags.filter(tag => tag !== _id); // eslint-disable-next-line no-unused-vars

      const updatedUser = await User.findByIdAndUpdate(userToUpdate._id, {
        tags: updatedTags
      }, {
        new: true
      });
    }

    return deletedTag;
  }
};
export { TagResolver };