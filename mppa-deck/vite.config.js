import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

function redirectStudyPath(server) {
  server.middlewares.use((request, response, next) => {
    const url = new URL(request.url, 'http://localhost');
    if (url.pathname === '/study/notes') {
      request.url = '/study/notes/index.html' + url.search;
      return next();
    }
    if (url.pathname !== '/study') return next();

    response.writeHead(308, { Location: '/study/' + url.search });
    response.end();
  });
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    {
      name: 'study-directory-redirect',
      configureServer: redirectStudyPath,
      configurePreviewServer: redirectStudyPath
    }
  ],
  appType: 'mpa',
  build: {
    rollupOptions: {
      input: {
        home: fileURLToPath(new URL('./index.html', import.meta.url)),
        study: fileURLToPath(new URL('./study/index.html', import.meta.url)),
        notes: fileURLToPath(new URL('./study/notes/index.html', import.meta.url))
      }
    }
  },
  server: {
    port: 5173,
    host: true
  }
});
