import { H as Html, _ as __nuxt_component_1 } from './Footer-2ra-SzrY.mjs';
import { useSSRContext } from 'file://E:/Programing/My%20Books/Markdown%20Book/markdown-fa-book/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from 'file://E:/Programing/My%20Books/Markdown%20Book/markdown-fa-book/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import './index-DIUDACRG.mjs';
import './server.mjs';
import 'file://E:/Programing/My%20Books/Markdown%20Book/markdown-fa-book/node_modules/ofetch/dist/node.mjs';
import '../_/renderer.mjs';
import 'file://E:/Programing/My%20Books/Markdown%20Book/markdown-fa-book/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file://E:/Programing/My%20Books/Markdown%20Book/markdown-fa-book/node_modules/h3/dist/index.mjs';
import 'file://E:/Programing/My%20Books/Markdown%20Book/markdown-fa-book/node_modules/devalue/index.js';
import 'file://E:/Programing/My%20Books/Markdown%20Book/markdown-fa-book/node_modules/ufo/dist/index.mjs';
import 'file://E:/Programing/My%20Books/Markdown%20Book/markdown-fa-book/node_modules/@unhead/ssr/dist/index.mjs';
import '../runtime.mjs';
import 'file://E:/Programing/My%20Books/Markdown%20Book/markdown-fa-book/node_modules/destr/dist/index.mjs';
import 'file://E:/Programing/My%20Books/Markdown%20Book/markdown-fa-book/node_modules/unenv/runtime/fetch/index.mjs';
import 'file://E:/Programing/My%20Books/Markdown%20Book/markdown-fa-book/node_modules/hookable/dist/index.mjs';
import 'file://E:/Programing/My%20Books/Markdown%20Book/markdown-fa-book/node_modules/klona/dist/index.mjs';
import 'file://E:/Programing/My%20Books/Markdown%20Book/markdown-fa-book/node_modules/scule/dist/index.mjs';
import 'file://E:/Programing/My%20Books/Markdown%20Book/markdown-fa-book/node_modules/defu/dist/defu.mjs';
import 'file://E:/Programing/My%20Books/Markdown%20Book/markdown-fa-book/node_modules/ohash/dist/index.mjs';
import 'file://E:/Programing/My%20Books/Markdown%20Book/markdown-fa-book/node_modules/unstorage/dist/index.mjs';
import 'file://E:/Programing/My%20Books/Markdown%20Book/markdown-fa-book/node_modules/unstorage/drivers/fs.mjs';
import 'file:///E:/Programing/My%20Books/Markdown%20Book/markdown-fa-book/node_modules/nuxt/dist/core/runtime/nitro/cache-driver.js';
import 'file://E:/Programing/My%20Books/Markdown%20Book/markdown-fa-book/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file://E:/Programing/My%20Books/Markdown%20Book/markdown-fa-book/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file://E:/Programing/My%20Books/Markdown%20Book/markdown-fa-book/node_modules/pathe/dist/index.mjs';
import 'file://E:/Programing/My%20Books/Markdown%20Book/markdown-fa-book/node_modules/unhead/dist/index.mjs';
import 'file://E:/Programing/My%20Books/Markdown%20Book/markdown-fa-book/node_modules/@unhead/shared/dist/index.mjs';
import 'file://E:/Programing/My%20Books/Markdown%20Book/markdown-fa-book/node_modules/unctx/dist/index.mjs';
import 'file://E:/Programing/My%20Books/Markdown%20Book/markdown-fa-book/node_modules/vue-router/dist/vue-router.node.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Html = Html;
  const _component_Footer = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_Html, {
    lang: "fa",
    dir: "rtl",
    "data-bs-theme": "dark"
  }, null, _parent));
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(ssrRenderComponent(_component_Footer, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/main.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const main = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { main as default };
//# sourceMappingURL=main-BuCovq7f.mjs.map
