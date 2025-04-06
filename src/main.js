import { createApp } from 'vue'

import App from "@/App.vue";
import ui from '@/components/ui';
import router from '@/router/router';
import directives from '@/directives';
import store from '@/store';

const app = createApp(App);

ui.forEach(c => {
  app.component(c.name, c);
});

directives.forEach(d => {
  app.directive(d.name, d);
});

app
  .use(router)
  .use(store)
  .mount('#app')
