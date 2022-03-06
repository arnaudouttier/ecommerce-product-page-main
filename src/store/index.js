import { createStore } from "vuex";
import shop from "@/api/shop";

export default createStore({

  state: {
    products: [],
  },

  getters: {
    availableProducts(state) {
      return state.products.filter((product) => product.inventory > 0);
    },

    productIsInStock() {
      return (product) => {
        return product.inventory > 0;
      };
    },
  },

  mutations: {
    setProducts(state, products) {
      // update products
      state.products = products;
    },

    decrementProductInventory(state, product) {
      product.inventory--;
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
  },
});
