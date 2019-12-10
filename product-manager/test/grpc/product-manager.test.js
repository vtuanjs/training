process.env.NODE_ENV = "test";
require("../../src/program").start();
const { describe, it, before } = require("mocha");
const { expect } = require("chai");
const { ProductModel } = require("../../src/models");
const products = require("../products.json");
const client = require("./client");
let productIds = {}

describe("ProductManager", () => {
  before(done => {
    Promise.all([ProductModel.deleteMany({})])
      .then(result => done())
      .catch(done);
  });

  describe("create", () => {
    it('[OK] --> Product "Iphone X" information', done => {
      client
        .request("create", products[0])
        .then(product => {
          expect(product).to.haveOwnProperty("_id");
          expect(product)
            .to.haveOwnProperty("createdAt")
            .to.be.a("string");
          expect(product)
            .to.haveOwnProperty("updatedAt")
            .to.be.a("string");
          done();
        })
        .catch(done);
    });

    it('[OK] --> Product "Iphone 8" information', done => {
      client
        .request("create", products[1])
        .then(product => {
          expect(product).to.haveOwnProperty("_id");
          expect(product)
            .to.haveOwnProperty("createdAt")
            .to.be.a("string");
          expect(product)
            .to.haveOwnProperty("updatedAt")
            .to.be.a("string");
          done();
        })
        .catch(done);
    });

    it('[OK] --> Product "Samsung A3" information', done => {
      client
        .request("create", products[2])
        .then(product => {
          expect(product).to.haveOwnProperty("_id");
          expect(product)
            .to.haveOwnProperty("createdAt")
            .to.be.a("string");
          expect(product)
            .to.haveOwnProperty("updatedAt")
            .to.be.a("string");
          done();
        })
        .catch(done);
    });

    it('[OK] --> Product "Xiaomi 9" information', done => {
      client
        .request("create", products[3])
        .then(product => {
          expect(product).to.haveOwnProperty("_id");
          expect(product)
            .to.haveOwnProperty("createdAt")
            .to.be.a("string");
          expect(product)
            .to.haveOwnProperty("updatedAt")
            .to.be.a("string");
          done();
        })
        .catch(done);
    });
  });

  describe("list", () => {
    it("[OK] --> List products infomation", done => {
      client
        .request("list", {
          filter: "name price",
          limit: 3,
          page: 0,
          sort: {
            name: "desc"
          }
        })
        .then(products => {
          expect(products.data.length).to.greaterThan(0);
          expect(products.limit).to.equals(3);
          expect(products).to.not.have.property("createdAt");
          // Save productIds - use to update/delete product
          productIds = products.data.map(product => product._id)
          done();
        })
        .catch(done);
    });
  });

  describe('update', () => {
    it('[OK] --> Update product information', (done) => {
      client.request('update', {
        productId: productIds[0],
        product: {
          name: 'Product Edit'
        }
      })
        .then(product => {
          expect(product.name).to.equals('Product Edit')
          done();
        })
        .catch(done);
    });
  });

  describe('delete', () => {
    it('[OK] --> Delete product information', (done) => {
      client.request('delete', {
        productId: productIds[1],
      })
        .then(product => {
          expect(product._id).to.equals(productIds[1])
          done();
        })
        .catch(done);
    });
  });
});
