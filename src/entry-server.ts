import { VueApp } from '@/utils/types';
import createApp from './main';

export default function (): VueApp {
  const { app } = createApp();

  return { app };
}
