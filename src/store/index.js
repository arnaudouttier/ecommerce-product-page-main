import { createStore } from "vuex";

export default createStore({
  state: {
    menuSidebar: false,
    activeShippingCart: false,
    productQuantity: 0,
    productPrice: 0,
    productUnitPrice: 250,
    productSalePrice: 0,
  },
  mutations: {
    activeMenuSidebar() {
      this.state.menuSidebar = !this.state.menuSidebar;
    },
    activeShCart() {
      this.state.activeShippingCart = !this.state.activeShippingCart;
    },
    sousProduct() {
      this.state.productQuantity = this.state.productQuantity - 1;
      this.state.productPrice =
        this.state.productPrice - this.state.productUnitPrice;
    },
    addProduct() {
      this.state.productQuantity = this.state.productQuantity + 1;
      this.state.productPrice =
        this.state.productUnitPrice * this.state.productQuantity;
    },
  },
  actions: {
    discountPrice() {
      this.state.productSalePrice = this.state.productPrice * 0.5;
    },
  },
  modules: {},
});
