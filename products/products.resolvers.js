const { getAllProducts, getProductsByPriceRange, addNewProduct, addNewReview } = require("./products.model");

module.exports = {
  Query: {
    products: () => {
      console.log("getting products...");
      return getAllProducts();
    },
    productsByPriceRange: (_, args) => {
      console.log("getting products by price range...");
      return getProductsByPriceRange(args.min, args.max);
    },
  },
  Mutation: {
    addNewProduct: (_, args) => {
      console.log("adding new products...");
      return addNewProduct(args.id, args.description, args.price );
    },
    addNewReview: (_, args) => {
      console.log("adding new review...");
      return addNewReview(args.id, args.rating, args.comment );
    },
  },
};
