import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vitejs.dev/config/
export default defineConfig({
  base: '/Portfolio/',
  plugins: [react()]
})

// push to github pages 
// npm run build  
// git add dist -f
// git commit -m "add dist"
// git subtree push --prefix dist origin gh-pages