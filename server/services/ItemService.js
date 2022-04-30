const itemModel = require("../models/mongoose/Item");
const item = require("../routes/admin/item");

class ItemService {
  static async getAll() {
    return itemModel.find({}).sort({ createdAt: -1 }).exec();
  }
  static async getOne(itemId) {
    return itemModel.findById(itemId).exec();
  }
  static async create(data) {
    const item = new itemModel(data);
    return item.save();
  }
  static async update(itemId, data) {
    return itemModel.findByIdAndUpdate(itemId, data).exec();
  }
  static async remove(itemId) {
    return itemModel.deleteOne({ _id: itemId }).exec();
  }
}

module.exports = ItemService;
