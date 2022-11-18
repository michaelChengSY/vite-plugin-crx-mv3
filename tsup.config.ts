import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts','src/client/background.ts','src/client/content.ts'],
  clean: true,
  shims: true
})