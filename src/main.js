import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

Vue.filter("uppercase-first", (value) => {
  return value.charAt(0).toUpperCase() + value.slice(1);
});
Vue.filter("normalize-value", (value) => {
  return value / 10;
});

new Vue({
  render: (h) => h(App),
}).$mount("#app");
