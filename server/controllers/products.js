// All necessary requires, such as the Product model.
const Product = require("mongoose").model("Product");

// var moment = require("moment");

module.exports = {
  allProducts: function(req, res) {
    Product.find()
      .then(products => {
        console.log(products);
        res.json({ products: products });
      })
      .catch(err => res.json(err));
  },

  oneProduct: function(req, res) {
    console.log("product id: " + req.params.id);
    Product.findOne({ _id: req.params.id })
      .then(product => {
        console.log("product: ", product);
        res.json(product);
      })
      .catch(err => res.json(err));
  },
  create: function(req, res) {
    const product = new Product(req.body);
    product
      .save()
      .then(product => res.json(product))
      .catch(err => {
        console.log("We have an error!", err);
        for (var key in err.errors) {
          req.flash("new_product", err.errors[key].message);
        }
        res.json(err);
      });
  },
  update: function(req, res) {
    console.log("update product id: " + req.params.id);
    req.body.updated_at = Date.now();
    Product.findOneAndUpdate({ _id: req.params.id }, req.body, {
      runValidators: true,
      context: "query"
    })
      .then(product => res.json(product))
      .catch(err => {
        console.log("We have an error!", err);
        for (var key in err.errors) {
          req.flash("update_product", err.errors[key].message);
        }
        res.json(err);
      });
  },
  delete: function(req, res) {
    console.log("product id: " + req.params.id);
    Product.deleteOne({ _id: req.params.id })
      .then(() => res.json({ message: "Success" }))
      .catch(err => res.json(err));
  },
};
