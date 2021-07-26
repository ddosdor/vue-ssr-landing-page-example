import { createApp, createSSRApp, h } from 'vue';
import { isServer } from '@/utils';
import { VueApp } from '@/utils/types';
import App from './App.vue';

import './assets/styles/main.sass';

export default function (): VueApp {
  const rootComponent = {
    render: () => h(App),
    components: { App },
  };

  const app = (isServer ? createSSRApp : createApp)(rootComponent);

  return { app };
}
