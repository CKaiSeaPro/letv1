import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "@/router";
import FontAwesomePlugin from "./plugins/FontAwesome";

// Init App
const app = createApp(App);

app.use(createPinia());
app.use(FontAwesomePlugin);
app.use(router);
app.mount("#app");
