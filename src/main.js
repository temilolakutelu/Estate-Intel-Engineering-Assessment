import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Request from "./Request";
//stylesheet
import "../src/assets/responsive.scss"

Vue.config.productionTip = false;
Vue.prototype.$request = Request;

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount("#app");