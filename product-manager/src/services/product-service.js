const { ProductModel } = require("../models");

exports.delete = ({ productId }) => {
  return new Promise((resolve, reject) => {
    return ProductModel.findByIdAndDelete(
      productId,
      (error, deletedProduct) => {
        if (error){
          reject(error)
        }

        if (!deletedProduct){
          reject('Can not find any product')
        }

        resolve(deletedProduct)
      }
    );
  });
};

exports.update = ({ productId, product }) => {
  return new Promise((resolve, reject) => {
    return ProductModel.findByIdAndUpdate(
      productId,
      product,
      { new: true },
      (error, updatedProduct) => {
        if (error){
          reject(error)
        }

        if (!updatedProduct){
          reject('Can not find any product')
        }

        resolve(updatedProduct)
      }
    );
  });
};

exports.list = ({ filter, limit, page, sort }) => {
  limit = limit ? parseInt(limit) : 0;
  page = page ? parseInt(page) : 0;

  return new Promise((resolve, reject) => {
    return ProductModel.find()
      .select(selectFieldsShow(filter))
      .limit(limit)
      .skip(limit * page)
      .sort(sort)
      .exec((error, products) => {
        if (error) {
          return reject(error);
        }

        return resolve({
          data: products,
          limit,
          page
        });
      });
  });
};

const selectFieldsShow = filter => {
  if (filter) {
    return filter.split(",").join(" ");
  }

  return "";
};

/**
 * @param {object} product
 */
exports.create = product => {
  return ProductModel.create(product);
};
