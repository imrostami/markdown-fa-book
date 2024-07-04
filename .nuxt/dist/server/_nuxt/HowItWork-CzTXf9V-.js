import { _ as _sfc_main$2, a as __nuxt_component_1 } from "./Paragraph-BtIoW6yt.js";
import { mergeProps, useSSRContext, withCtx, createTextVNode, createVNode } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main$1 = {
  __name: "AppImage",
  __ssrInlineRender: true,
  props: ["source", "alt"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "text-center" }, _attrs))} data-v-b3a21a6c><img${ssrRenderAttr("src", __props.source)}${ssrRenderAttr("alt", __props.alt)} class="rounded-3 img-fluid" data-v-b3a21a6c></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppImage.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-b3a21a6c"]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_DocContainer = _sfc_main$2;
  const _component_Paragraph = __nuxt_component_1;
  const _component_paragraph = __nuxt_component_1;
  const _component_AppImage = __nuxt_component_2;
  _push(ssrRenderComponent(_component_DocContainer, mergeProps({ "page-title": "Markdown چطور کار میکنه ؟" }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="paragraph-container"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_Paragraph, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` نوشتن با Markdwon آسان است اما بهتر است نگاهی به شیوه کارکرد بندازیم `);
            } else {
              return [
                createTextVNode(" نوشتن با Markdwon آسان است اما بهتر است نگاهی به شیوه کارکرد بندازیم ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_paragraph, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` فایل های مارک داون تماما با فرمت md ذخیره می شوند مثلا <code class="code-bubble"${_scopeId2}>document.md</code> که این فایل ها مشخصا دارای اطلاعات توشته شده توسط شما و قواعد مارکداون در مابین محتوای شماست کل ساختار فایل md ایجاد شده توسط مترجم یا به اصطلاح Parser به محتوای قابل خواندن که معمولا html می باشند تبدیل می شوند تا در مرورگر قابل اجرا و نمایش باشند `);
            } else {
              return [
                createTextVNode(" فایل های مارک داون تماما با فرمت md ذخیره می شوند مثلا "),
                createVNode("code", { class: "code-bubble" }, "document.md"),
                createTextVNode(" که این فایل ها مشخصا دارای اطلاعات توشته شده توسط شما و قواعد مارکداون در مابین محتوای شماست کل ساختار فایل md ایجاد شده توسط مترجم یا به اصطلاح Parser به محتوای قابل خواندن که معمولا html می باشند تبدیل می شوند تا در مرورگر قابل اجرا و نمایش باشند ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_AppImage, {
          source: "/BookImages/markdownToHTML.jpg",
          alt: "markdown to html conversion steps"
        }, null, _parent2, _scopeId));
        _push2(`</div>`);
      } else {
        return [
          createVNode("div", { class: "paragraph-container" }, [
            createVNode(_component_Paragraph, null, {
              default: withCtx(() => [
                createTextVNode(" نوشتن با Markdwon آسان است اما بهتر است نگاهی به شیوه کارکرد بندازیم ")
              ]),
              _: 1
            }),
            createVNode(_component_paragraph, null, {
              default: withCtx(() => [
                createTextVNode(" فایل های مارک داون تماما با فرمت md ذخیره می شوند مثلا "),
                createVNode("code", { class: "code-bubble" }, "document.md"),
                createTextVNode(" که این فایل ها مشخصا دارای اطلاعات توشته شده توسط شما و قواعد مارکداون در مابین محتوای شماست کل ساختار فایل md ایجاد شده توسط مترجم یا به اصطلاح Parser به محتوای قابل خواندن که معمولا html می باشند تبدیل می شوند تا در مرورگر قابل اجرا و نمایش باشند ")
              ]),
              _: 1
            }),
            createVNode(_component_AppImage, {
              source: "/BookImages/markdownToHTML.jpg",
              alt: "markdown to html conversion steps"
            })
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/book/Session1/HowItWork.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const HowItWork = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  HowItWork as default
};
//# sourceMappingURL=HowItWork-CzTXf9V-.js.map
