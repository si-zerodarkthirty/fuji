import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "custom"
declare module "/Users/shusukeioku/Dropbox/My Mac (Shusukes-MacBook-Air.local)/Desktop/fuji/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}