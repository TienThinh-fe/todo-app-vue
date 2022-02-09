import { createApp } from "vue";
import App from "./App.vue";

import store from "./store";

import BaseButton from "./components/Base/BaseButton.vue";
import BaseDialog from "./components/Base/BaseDialog.vue";

const app = createApp(App);

app.component("BaseButton", BaseButton);
app.component("BaseDialog", BaseDialog);

app.use(store);

app.mount("#app");
