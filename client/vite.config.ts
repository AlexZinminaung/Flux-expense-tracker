import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
      react(), 
      tailwindcss(), 
      VitePWA({
        registerType: "autoUpdate",
        devOptions: {
          enabled: true,
        },
        manifest: {
          name: "Expense Tracker",
          short_name: "Expenses",
          start_url: "/",
          display: "standalone",
          theme_color: "#000000",
          icons: [
            {
              src: "/icon.png",
              sizes: "192x192",
              type: "image/png",
            },
            {
              src: "/icon.png",
              sizes: "512x512",
              type: "image/png",
            },
          ],
        },
      })]
})
