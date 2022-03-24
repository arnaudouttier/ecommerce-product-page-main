/**
 * Mocking client-server processing
 */
const _products = [
  {
    id: 0,
    title: "Fall Limited Edition Sneakers",
    category: "Sneaker Company",
    description:
      "These low-profile sneakers are your perfect casual wear companion . Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
    discountPrice: 125.0,
    unitPrice: 250.0,
    quantity: 0,
    inventory: 1,
    images: [
      {
        id: 0,
        imageUrl: "image-product-1.jpg",
        imageThumbnailUrl: "image-product-1-thumbnail.jpg",
      },
      {
        id: 1,
        imageUrl: "image-product-2.jpg",
        imageThumbnailUrl: "image-product-2-thumbnail.jpg",
      },
      {
        id: 2,
        imageUrl: "image-product-3.jpg",
        imageThumbnailUrl: "image-product-3-thumbnail.jpg",
      },
      {
        id: 3,
        imageUrl: "image-product-4.jpg",
        imageThumbnailUrl: "image-product-4-thumbnail.jpg",
      },
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
