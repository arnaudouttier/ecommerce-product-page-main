import { createStore } from "vuex";
import shop from "@/api/shop";

export default createStore({
  state: {
    products: [],
    cart: [],
    activeSidebar: false,
    activeCart: false,
  },

  getters: {
    getProducts(state) {
      return state.products.map((product) => {
        return product;
      });
    },

    cartProducts(state, getters) {
      return state.cart.map((cartItem) => {
        return {
          id: cartItem.id,
          price: cartItem.price,
          quantity: cartItem.quantity,
          discountProductPrice: getters.discountCartTotal,
        };
      });
    },

    cartTotal(state) {
      return state.products.reduce(
        (total, product) => total + product.unitPrice * product.quantity,
        0
      );
    },

    discountCartTotal(state) {
      return state.products.reduce(
        (total, product) => total + product.unitPrice * product.quantity * 0.5,
        0
      );
    },

    getActiveSidebar(state) {
      return state.activeSidebar;
    },

    getActiveCart(state) {
      return state.activeCart;
    },
  },

  mutations: {
    setProducts(state, products) {
      state.products = products;
    },

    pushProductToCart(state, product) {
      state.cart.push({
        id: product.id,
        price: product.unitPrice,
        quantity: product.quantity,
      });
    },

    incrementProductQuantity(state, product) {
      return product.quantity++;
    },

    deCrementProductQuantity(state, product) {
      return product.quantity--;
    },

    cartQuantity(state, product) {
      return state.cart.forEach((c) => {
        c.quantity = product.quantity;
      });
    },

    cleanCart(state) {
      return state.products.forEach((c) => {
        c.quantity = 0;
      });
    },

    emptyCart(state) {
      return (state.cart = []);
    },

    toggleSidebar(state) {
      state.activeSidebar = !state.activeSidebar;
    },

    toggleCart(state) {
      state.activeCart = !state.activeCart;
    },
  },

  actions: {
    fetchProducts({ commit }) {
      return new Promise((resolve) => {
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
        commit("cartQuantity", product);
      }
    },

    incrementProductQuantity({ commit }, product) {
      commit("incrementProductQuantity", product);
    },

    deCrementProductQuantity({ commit }, product) {
      commit("deCrementProductQuantity", product);
    },

    cleanCart({ commit }) {
      commit("cleanCart");
    },

    emptyCart({ commit }) {
      commit("emptyCart");
    },

    toggleSidebar({ commit }) {
      commit("toggleSidebar");
    },

    activeCart({ commit }) {
      commit("toggleCart");
    },
  },
});
