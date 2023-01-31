import { _ as _export_sfc, a as __nuxt_component_0$1 } from '../server.mjs';
import { useSSRContext, mergeProps, withCtx, createVNode, createTextVNode } from 'file:///Users/shusukeioku/Dropbox/My%20Mac%20(Shusukes-MacBook-Air.local)/Desktop/fuji/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from 'file:///Users/shusukeioku/Dropbox/My%20Mac%20(Shusukes-MacBook-Air.local)/Desktop/fuji/node_modules/vue/server-renderer/index.mjs';
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

const _sfc_main$2 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  const _component_nuxt_link = __nuxt_component_0$1;
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<header${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<p${_scopeId}>\u5BCC\u58EB\u5316\u6210</p>`);
      } else {
        return [
          createVNode("p", null, "\u5BCC\u58EB\u5316\u6210")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<nav><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` \u30C8\u30C3\u30D7 `);
      } else {
        return [
          createTextVNode(" \u30C8\u30C3\u30D7 ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/about" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` \u4F1A\u793E\u6982\u8981 `);
      } else {
        return [
          createTextVNode(" \u4F1A\u793E\u6982\u8981 ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></nav></header>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<footer${ssrRenderAttrs(_attrs)}> \u30D5\u30C3\u30BF\u30FC </footer>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Header = __nuxt_component_0;
  const _component_Footer = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(mergeProps({ id: "app-layout" }, _attrs))}><main>`);
  _push(ssrRenderComponent(_component_Header, null, null, _parent));
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(ssrRenderComponent(_component_Footer, null, null, _parent));
  _push(`</main></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/custom.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const custom = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { custom as default };
//# sourceMappingURL=custom-4617fcd6.mjs.map
