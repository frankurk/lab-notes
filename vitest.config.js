import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
    testEnvironment: 'jsdom',
    setupFiles: ["src/setupTest.js"],
    includes: ['**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    excludes: ['**/node_modules/**', '**/dist/**', '**/cypress/**', '**/.{idea,git,cache,output,temp}/**'],
  },
})