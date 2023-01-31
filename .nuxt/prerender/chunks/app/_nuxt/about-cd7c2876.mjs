import { ssrRenderAttrs } from 'file:///Users/shusukeioku/Dropbox/My%20Mac%20(Shusukes-MacBook-Air.local)/Desktop/fuji/node_modules/vue/server-renderer/index.mjs';
import { useSSRContext } from 'file:///Users/shusukeioku/Dropbox/My%20Mac%20(Shusukes-MacBook-Air.local)/Desktop/fuji/node_modules/vue/index.mjs';
import { _ as _export_sfc } from '../server.mjs';
import 'file:///Users/shusukeioku/Dropbox/My%20Mac%20(Shusukes-MacBook-Air.local)/Desktop/fuji/node_modules/ofetch/dist/node.mjs';
import 'file:///Users/shusukeioku/Dropbox/My%20Mac%20(Shusukes-MacBook-Air.local)/Desktop/fuji/node_modules/hookable/dist/index.mjs';
import 'file:///Users/shusukeioku/Dropbox/My%20Mac%20(Shusukes-MacBook-Air.local)/Desktop/fuji/node_modules/unctx/dist/index.mjs';
import 'file:///Users/shusukeioku/Dropbox/My%20Mac%20(Shusukes-MacBook-Air.local)/Desktop/fuji/node_modules/ufo/dist/index.mjs';
import 'file:///Users/shusukeioku/Dropbox/My%20Mac%20(Shusukes-MacBook-Air.local)/Desktop/fuji/node_modules/h3/dist/index.mjs';
import 'file:///Users/shusukeioku/Dropbox/My%20Mac%20(Shusukes-MacBook-Air.local)/Desktop/fuji/node_modules/@unhead/vue/dist/index.mjs';
import 'file:///Users/shusukeioku/Dropbox/My%20Mac%20(Shusukes-MacBook-Air.local)/Desktop/fuji/node_modules/@unhead/dom/dist/index.mjs';
import 'file:///Users/shusukeioku/Dropbox/My%20Mac%20(Shusukes-MacBook-Air.local)/Desktop/fuji/node_modules/@unhead/ssr/dist/index.mjs';
import 'file:///Users/shusukeioku/Dropbox/My%20Mac%20(Shusukes-MacBook-Air.local)/Desktop/fuji/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///Users/shusukeioku/Dropbox/My%20Mac%20(Shusukes-MacBook-Air.local)/Desktop/fuji/node_modules/defu/dist/defu.mjs';
import '../../nitro/config.mjs';
import 'file:///Users/shusukeioku/Dropbox/My%20Mac%20(Shusukes-MacBook-Air.local)/Desktop/fuji/node_modules/destr/dist/index.mjs';
import 'file:///Users/shusukeioku/Dropbox/My%20Mac%20(Shusukes-MacBook-Air.local)/Desktop/fuji/node_modules/scule/dist/index.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1>\u4F1A\u793E\u6982\u8981</h1></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const about = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { about as default };
//# sourceMappingURL=about-cd7c2876.mjs.map
