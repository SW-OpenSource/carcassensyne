import { Item, List } from 'models';
const ItemResolver = {
  allItems: async () => {
    const Items = await Item.find();
    return Items;
  },
  findItemById: async args => {
    const item = await Item.findById(args._id);
    return item;
  },
  addItem: async ({
    title,
    creator,
    list,
    icon,
    note,
    tags
  }) => {
    const newItem = new Item({
      title,
      creator,
      list,
      icon,
      note,
      tags,
      createdAt: new Date()
    });
    const savedItem = await newItem.save();
    const listToUpdate = await List.findById(list);

    if (!listToUpdate.items.includes(savedItem._id)) {
      const updatedItems = [...listToUpdate.items, savedItem._id]; // eslint-disable-next-line no-unused-vars

      const updatedList = await List.findByIdAndUpdate(list, {
        items: updatedItems
      }, {
        new: true
      });
    }

    return savedItem;
  },
  updateItem: async args => {
    const {
      _id
    } = args;
    delete args._id;
    args.updatedAt = new Date();
    const updatedItem = await Item.findByIdAndUpdate(_id, args, {
      new: true
    });
    return updatedItem;
  },
  deleteItem: async ({
    _id
  }) => {
    const deletedItem = await Item.findByIdAndRemove(_id);
    const listToUpdate = await List.findById(deletedItem.list);
    const updatedItems = listToUpdate.items.filter(item => item !== _id); // eslint-disable-next-line no-unused-vars

    const updatedList = await List.findByIdAndUpdate(listToUpdate._id, {
      items: updatedItems
    }, {
      new: true
    });
    return deletedItem;
  }
};
export { ItemResolver };