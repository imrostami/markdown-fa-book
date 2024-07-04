import { _ as _sfc_main$3, a as __nuxt_component_1 } from "./Paragraph-BtIoW6yt.js";
import { mergeProps, useSSRContext, withCtx, createTextVNode, createVNode } from "vue";
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import { a as useSeoMeta } from "./index-DIUDACRG.js";
import "../server.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "defu";
import "ufo";
import "devalue";
const _sfc_main$2 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<strong${ssrRenderAttrs(mergeProps({ class: "bold" }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</strong>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Bold.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<em${ssrRenderAttrs(mergeProps({ class: "italic fst-italic" }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</em>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Italic.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      author: "محمد داداش رستمی",
      title: "راهنمای جامع Markdown - Markdown چیست؟",
      ogTitle: "راهنمای جامع Markdown - Markdown چیست؟",
      description: "مارک داون چیست ؟ در سال 2004 با این ایده که بتواند خواندن و نوشتن یک متن تحت وب را برای همه آسان کند و قابل تبدیل به خانواده HTML هم باشد به وجود آمد. از Markdown به عنوان یک استاندارد متن نویسی یاد می‌شود و بزرگترین مزیت این استاندارد استفاده از حروف ساده و کوتاه برای اهداف نگارشی (از جمله پررنگ کردن متن و .... ) می‌باشد",
      ogDescription: "مارک داون چیست ؟ در سال 2004 با این ایده که بتواند خواندن و نوشتن یک متن تحت وب را برای همه آسان کند و قابل تبدیل به خانواده HTML هم باشد به وجود آمد. از Markdown به عنوان یک استاندارد متن نویسی یاد می‌شود و بزرگترین مزیت این استاندارد استفاده از حروف ساده و کوتاه برای اهداف نگارشی (از جمله پررنگ کردن متن و .... ) می‌باشد",
      robots: "index, follow"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_DocContainer = _sfc_main$3;
      const _component_Paragraph = __nuxt_component_1;
      const _component_Bold = __nuxt_component_2;
      const _component_italic = __nuxt_component_3;
      _push(ssrRenderComponent(_component_DocContainer, mergeProps({ "page-title": "Markdown دقیقا چیه ؟" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="paragraph-container"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Paragraph, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Bold, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Markdown `);
                      } else {
                        return [
                          createTextVNode(" Markdown ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(` یک زبان نشانه‌گذاری ساده است که میتونیم از آن برای افزودن عناصر قالب‌بندی به متن‌ استفاده کنیم. این زبان توسط جان گروبر در سال 2004 ایجاد شده و الان یکی از محبوب‌ترین زبان‌های نشانه‌گذاری در جهان است. استفاده از Markdown با ویرایشگر WYSIWYGکاملا متفاوته. در برنامه‌هایی مثل Microsoft Word که یک ویرایشگر متن به حساب میان، شما دکمه‌ها را برای قالب‌بندی کلمات و عبارات فشار میدین و تغییرات به طور فوری قابل مشاهده هستن :). اما Markdown این‌طور نیست. وقتی یک فایل با قالب Markdown ایجاد می‌کنین، با استفاده از قواعد خاص تعریف شده برای زبان مارک داون اون هارو به متن خودتون اضافه میکنین تا شیوه قالب بندی رو مشخص کنین مثلا شما میتونین داخل محتوای خودتون یک متن ایتالیک `);
                  _push3(ssrRenderComponent(_component_italic, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`مثل این `);
                      } else {
                        return [
                          createTextVNode("مثل این ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(` داشته باشید یا میتونین یک قطعه کد مثل کد پایین داشته باشین `);
                } else {
                  return [
                    createVNode(_component_Bold, null, {
                      default: withCtx(() => [
                        createTextVNode(" Markdown ")
                      ]),
                      _: 1
                    }),
                    createTextVNode(" یک زبان نشانه‌گذاری ساده است که میتونیم از آن برای افزودن عناصر قالب‌بندی به متن‌ استفاده کنیم. این زبان توسط جان گروبر در سال 2004 ایجاد شده و الان یکی از محبوب‌ترین زبان‌های نشانه‌گذاری در جهان است. استفاده از Markdown با ویرایشگر WYSIWYGکاملا متفاوته. در برنامه‌هایی مثل Microsoft Word که یک ویرایشگر متن به حساب میان، شما دکمه‌ها را برای قالب‌بندی کلمات و عبارات فشار میدین و تغییرات به طور فوری قابل مشاهده هستن :). اما Markdown این‌طور نیست. وقتی یک فایل با قالب Markdown ایجاد می‌کنین، با استفاده از قواعد خاص تعریف شده برای زبان مارک داون اون هارو به متن خودتون اضافه میکنین تا شیوه قالب بندی رو مشخص کنین مثلا شما میتونین داخل محتوای خودتون یک متن ایتالیک "),
                    createVNode(_component_italic, null, {
                      default: withCtx(() => [
                        createTextVNode("مثل این ")
                      ]),
                      _: 1
                    }),
                    createTextVNode(" داشته باشید یا میتونین یک قطعه کد مثل کد پایین داشته باشین ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<pre class="code-pre"${_scopeId}>          <code class="language-go code-base"${_scopeId}>
            package main

          ()func main
          {
              fmt.Println(&#39;hello world&#39;)
          }
          </code>
        </pre>`);
            _push2(ssrRenderComponent(_component_Paragraph, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` تمامی این قواعد و نشانه ها تو قسمت های بعدی آموزش داده شدن پس اگه الان چیزی از اینا نمیفهمین اصلا نگران نباشین `);
                } else {
                  return [
                    createTextVNode(" تمامی این قواعد و نشانه ها تو قسمت های بعدی آموزش داده شدن پس اگه الان چیزی از اینا نمیفهمین اصلا نگران نباشین ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "paragraph-container" }, [
                createVNode(_component_Paragraph, null, {
                  default: withCtx(() => [
                    createVNode(_component_Bold, null, {
                      default: withCtx(() => [
                        createTextVNode(" Markdown ")
                      ]),
                      _: 1
                    }),
                    createTextVNode(" یک زبان نشانه‌گذاری ساده است که میتونیم از آن برای افزودن عناصر قالب‌بندی به متن‌ استفاده کنیم. این زبان توسط جان گروبر در سال 2004 ایجاد شده و الان یکی از محبوب‌ترین زبان‌های نشانه‌گذاری در جهان است. استفاده از Markdown با ویرایشگر WYSIWYGکاملا متفاوته. در برنامه‌هایی مثل Microsoft Word که یک ویرایشگر متن به حساب میان، شما دکمه‌ها را برای قالب‌بندی کلمات و عبارات فشار میدین و تغییرات به طور فوری قابل مشاهده هستن :). اما Markdown این‌طور نیست. وقتی یک فایل با قالب Markdown ایجاد می‌کنین، با استفاده از قواعد خاص تعریف شده برای زبان مارک داون اون هارو به متن خودتون اضافه میکنین تا شیوه قالب بندی رو مشخص کنین مثلا شما میتونین داخل محتوای خودتون یک متن ایتالیک "),
                    createVNode(_component_italic, null, {
                      default: withCtx(() => [
                        createTextVNode("مثل این ")
                      ]),
                      _: 1
                    }),
                    createTextVNode(" داشته باشید یا میتونین یک قطعه کد مثل کد پایین داشته باشین ")
                  ]),
                  _: 1
                }),
                createVNode("pre", { class: "code-pre" }, [
                  createTextVNode("          "),
                  createVNode("code", { class: "language-go code-base" }, "\n            package main\n\n          ()func main\n          {\n              fmt.Println('hello world')\n          }\n          "),
                  createTextVNode("\n        ")
                ]),
                createVNode(_component_Paragraph, null, {
                  default: withCtx(() => [
                    createTextVNode(" تمامی این قواعد و نشانه ها تو قسمت های بعدی آموزش داده شدن پس اگه الان چیزی از اینا نمیفهمین اصلا نگران نباشین ")
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/book/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-TPCq_gzs.js.map
