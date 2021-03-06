var productsController = require("../controllers/products.js");

module.exports = function(app) {
  // Get all products
  app.get("/products", productsController.allProducts);
  // Get one product
  app.get("/products/:id", productsController.oneProduct);
  //Create new product
  app.post("/products", productsController.create);
  //Delete product
  app.post("/products/:id", productsController.delete);
  //Update product
  app.put("/products/:id", productsController.update);
  //Default route
  app.all("*", (req, res, next) => {
    res.sendFile(path.resolve("./public/dist/public/index.html"));
  });
};
