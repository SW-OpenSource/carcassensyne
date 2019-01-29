import { List, User, Tag, Item } from 'models';
const ListResolver = {
  allLists: async () => {
    const lists = await List.find();
    return lists;
  },
  findListById: async args => {
    const list = await List.findById(args._id);
    return list;
  },
  addList: async ({
    title,
    creator,
    icon
  }) => {
    const newList = new List({
      title,
      creator,
      icon,
      createdAt: new Date()
    });
    const savedList = await newList.save();
    const creatorToUpdate = await User.findById(creator);
    const UpdatedLists = [...creatorToUpdate.lists, savedList._id]; // eslint-disable-next-line no-unused-vars

    const updatedCreator = await User.findByIdAndUpdate(creator, {
      lists: UpdatedLists
    }, {
      new: true
    });
    return savedList;
  },
  updateList: async args => {
    const {
      _id
    } = args;
    delete args._id;
    args.updatedAt = new Date();
    const updatedList = await List.findByIdAndUpdate(_id, args, {
      new: true
    });
    return updatedList;
  },
  deleteList: async args => {
    const {
      _id
    } = args; // Delete List

    const list = await List.findById(_id);
    const deletedList = await list.remove(); // Update Creator's Lists

    const creatorToUpdate = await User.findById(deletedList.creator);
    const UpdatedLists = creatorToUpdate.lists.filter(value => value !== deletedList._id); // eslint-disable-next-line no-unused-vars

    const updatedCreator = await User.findByIdAndUpdate(creatorToUpdate._id, {
      lists: UpdatedLists
    }, {
      new: true
    }); // Delete tags

    deletedList.tags.forEach(async tag => {
      // eslint-disable-next-line no-unused-vars
      const removedTag = await Tag.findByIdAndRemove(tag);
    }); // Delete items

    deletedList.items.forEach(async item => {
      // eslint-disable-next-line no-unused-vars
      const removedItem = await Item.findByIdAndRemove(item);
    });
    return deletedList;
  }
};
export { ListResolver };