import { createApp } from "vue";
import App from "./App.vue";
import { setupStore } from "./store";
import { setupRouter } from "./routes";
import "./styles/index.css";

const app = createApp(App);
setupRouter(app);
setupStore(app);
app.mount("#app");
