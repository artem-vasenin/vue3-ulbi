import { createApp } from 'vue'
import App from "@/App.vue";
import ui from './components/ui';
import router from '@/router/router';

const app = createApp(App);

ui.forEach(c => {
  app.component(c.name, c);
})

app
  .use(router)
  .mount('#app')
