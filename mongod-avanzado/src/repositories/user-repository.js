import '../models/pets-model.js';
import UserModel from '../models/user-model.js';

class UserRepository {
  constructor(model) {
    this.model = model;
  }

  getAll = async (page, limit) => {
    try {
      // If page and limit are provided, return a paginated response
      if (page && limit) {
        const pageNum = parseInt(page) || 1;
        const lim = parseInt(limit) || 10;
        const skip = (pageNum - 1) * lim;

        const docs = await this.model.find().skip(skip).limit(lim);
        const totalDocs = await this.model.countDocuments();
        const totalPages = Math.max(1, Math.ceil(totalDocs / lim));

        return {
          docs,
          totalPages,
          page: pageNum,
          hasPrevPage: pageNum > 1,
          hasNextPage: pageNum < totalPages,
          prevPage: pageNum > 1 ? pageNum - 1 : null,
          nextPage: pageNum < totalPages ? pageNum + 1 : null,
        };
      }

      // Otherwise return all documents as an array
      return await this.model.find();
    } catch (error) {
      throw new Error(error);
    }
  };

  getById = async (id) => {
    try {
      return await this.model.findById(id).populate("pets")
    } catch (error) {
      throw new Error(error);
    }
  };

  getByName = async (name) => {
    try {
      return await this.model.findOne({ first_name: name });
    } catch (error) {
      throw new Error(error);
    }
  };

  create = async (body) => {
    try {
      return await this.model.create(body);
    } catch (error) {
      throw new Error(error);
    }
  };

  update = async (id, body) => {
    try {
      return await this.model.findByIdAndUpdate(id, body, { returnDocument: true });
    } catch (error) {
      throw new Error(error);
    }
  };

  delete = async (id) => {
    try {
      return await this.model.findByIdAndDelete(id);
    } catch (error) {
      throw new Error(error);
    }
  };

  addPetToUser = async (userId, petId) => {
    try {
      // Push petId to user's pets array
      return await this.model.findByIdAndUpdate(
        userId,
        { $push: { pets: petId } },
        { new: true }
      );
    } catch (error) {
      throw new Error(error);
    }
  };
}

export const userRepository = new UserRepository(UserModel);