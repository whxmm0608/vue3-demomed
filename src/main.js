import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHashHistory } from "vue-router";
import routes from "./router/index";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// θΏζ createWebHashHistory ε createMemoryHistory

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

const app = createApp(App);
app.use(router)
app.use(ElementPlus, { size: 'small', zIndex: 3000 })
app.mount('#app');