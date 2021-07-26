import { createApp, createSSRApp } from 'vue';

export interface VueApp {
  app: ReturnType<typeof createApp | typeof createSSRApp>
}
