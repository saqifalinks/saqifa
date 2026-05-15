import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  output: 'server', // یا 'hybrid' بسته به نیاز پروژه‌ات
  adapter: cloudflare(),
});