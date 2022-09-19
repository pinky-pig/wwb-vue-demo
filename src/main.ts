import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import 'uno.css';
import './styles/main.css';
import { setupRouter } from './router';

async function setupApp() {
  const app = createApp(App);
  // 挂载路由
  await setupRouter(app);
  app.mount('#app');
}
setupApp();
