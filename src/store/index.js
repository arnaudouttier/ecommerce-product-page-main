import { createStore } from "vuex";

export default createStore({
  state: {
    menuSidebar: false,
    activeShippingCart: false
  },
  mutations: {
    activeMenuSidebar() {
      this.state.menuSidebar = !this.state.menuSidebar
    },
    activeShCart() {
      this.state.activeShippingCart = !this.state.activeShippingCart
    }
  },
  actions: {},
  modules: {},
});
