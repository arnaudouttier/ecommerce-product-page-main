import { createStore } from "vuex";
import shop from "@/api/shop";

export default createStore({

  state: {
    products: [],
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
