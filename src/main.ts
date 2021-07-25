import { createSSRApp } from 'vue';
import App from './App.vue';

interface MainApp {
  app: ReturnType<typeof createSSRApp>
}

export default function (): MainApp {
  const app = createSSRApp(App);
  return {
    app,
  };
}
