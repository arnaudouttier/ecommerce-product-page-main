/**
 * Mocking client-server processing
 */
const _products = [
  {
    id: 1,
    title: "iPad 4 Mini",
    presentation:
      "These low-profile sneakers are your perfect casual wear companion . Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
    price: 125.0,
    inventory: 1,
    imageUrl: [
      "image-product-1.jpg",
      "image-product-2.jpg",
      "image-product-3.jpg",
      "image-product-4.jpg",
    ],
  },
];

export default {
  getProducts(cb) {
    setTimeout(() => cb(_products), 100);
  },

  buyProducts(products, cb, errorCb) {
    setTimeout(() => {
      // simulate random checkout failure.
      Math.random() > 0.5 || navigator.userAgent.indexOf("PhantomJS") > -1
        ? cb()
        : errorCb();
    }, 100);
  },
};
