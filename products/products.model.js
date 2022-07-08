const products = [
  {
    id: "redshoe",
    description: "Red Shoe",
    price: 42.12,
    reviews: [],
  },
  {
    id: "bluejean",
    description: "Blue Jean",
    price: 55.55,
    reviews: [],
  },
];

function getAllProducts() {
  return products;
}

function getProductsByPriceRange(min, max) {
  return products.filter((product) => {
    return product.price >= min && product.price <= max;
  });
}

function addNewProduct(id, description, price) {
  const newProduct = {
    id,
    description,
    price,
    reviews: [],
  };

  products.push(newProduct);

  return newProduct;
}

function addNewReview(id, rating, comment) {
  const matchedProduct = products.find((product) => {
    return product.id === id;
  });

  if (matchedProduct) {
    const newReview = {
      rating,
      comment,
    };
    matchedProduct.reviews.push(newReview);
    return newReview;
  }
}

module.exports = {
  getAllProducts,
  getProductsByPriceRange,
  addNewProduct,
  addNewReview
};
