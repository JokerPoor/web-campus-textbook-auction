import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path';
import tailWindCss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from '@vant/auto-import-resolver';
import AutoImport from 'unplugin-auto-import/vite';
import svgLoader from 'vite-svg-loader';

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(),
  AutoImport({
    imports: ['vue'],
    dirs: [],
    resolvers: [],
    dts: 'auto-imports.d.ts',
  }),
  Components({
    resolvers: [VantResolver()],
  }),
  svgLoader(),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        javascriptEnabled: true,
        additionalData:
          '@use "./src/assets/style/variable.scss"; @use "./src/assets/style/mixins.scss"; @use "./src/assets/style/scroll.scss"; @use "./src/assets/style/global.scss";',
      },
      postcss: {
        plugins: [tailWindCss, autoprefixer],
      },
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src/'),
    },
    // 导入时忽略的后缀名
    extensions: ['.mjs', '.js', '.mts', '.ts', '.jsx', '.tsx', '.json'],
  },
  server: {
    port: 10100,
    host: '0.0.0.0',
  },
})
