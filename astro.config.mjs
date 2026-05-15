import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless'; // این خط را اضافه کن
export default defineConfig({
  output: 'server',
  adapter: vercel(), // این خط را اضافه کن
});