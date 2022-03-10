import { createStore } from "vuex";
import shop from "@/api/shop";

export default createStore({
  state: {
    products: [],
    cart: [],
  },

  getters: {
    getProducts(state) {
      return state.products.find((product) => {
        return product;
      })
    },

    getProductsImage(state) {
      return state.products.find(product =>{
        return product.imageUrl
      })
    },

    productIsInStock() {
      return (product) => {
        return product.inventory > 0;
      };
    },
    cartProducts(state) {
      return state.cart.map((cartItem) => {
        return {
          id: cartItem.id,
          price: cartItem.price,
          quantity: cartItem.quantity,
        };
      });
    },

    cartTotal(state, getters) {
      return getters.cartProducts.reduce(
        (total, product) => total + product.price * product.quantity,
        0
      );
    },

    discountCartTotal(state, getters) {
      return getters.cartProducts.reduce(
        (total, product) => total + product.price * product.quantity * 0.5,
        0
      );
    },
  },

  mutations: {
    setProducts(state, products) {
      // update products
      state.products = products;
    },

    pushProductToCart(state, product) {
      state.cart.push({
        id: product.id,
        price: product.unitPrice,
        quantity: product.quantity,
      });
    },

    incrementItemQuantity(state, cartItem) {
      return cartItem.quantity;
    },

    emptyCart(state) {
      state.cart = [];
    },
  },

  actions: {
    fetchProducts({ commit }) {
      return new Promise((resolve) => {
        // make the call
        // call setProducts mutation
        shop.getProducts((products) => {
          commit("setProducts", products);
          resolve();
        });
      });
    },

    addProductToCart({ state, commit }, product) {
      const cartItem = state.cart.find((item) => item.id === product.id);
      if (!cartItem) {
        commit("pushProductToCart", product);
      } else {
        commit("incrementItemQuantity", cartItem);
      }
    },
  },
});
