import { createApp } from 'vue'
import App from "@/App.vue";
import ui from './components/ui';

const app = createApp(App);

ui.forEach(c => {
  app.component(c.name, c);
})

app.mount('#app')
