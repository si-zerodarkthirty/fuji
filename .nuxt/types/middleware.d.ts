import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "/Users/shusukeioku/Dropbox/My Mac (Shusukes-MacBook-Air.local)/Desktop/fuji/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}