import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const fixCorsAttribute = () => {
  return {
    name: 'fix-cors-attribute',
    transformIndexHtml(html) {
      return html.replace(/crossorigin="true"/g, 'crossorigin')
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
    }),
    fixCorsAttribute(),
  ],
  base: '/rsschool-deploy/museum/',
})
