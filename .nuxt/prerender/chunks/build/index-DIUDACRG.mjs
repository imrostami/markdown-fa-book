import { ref, watchEffect, watch, getCurrentInstance } from 'file://E:/Programing/My%20Books/Markdown%20Book/markdown-fa-book/node_modules/vue/index.mjs';
import { i as injectHead, r as resolveUnrefHeadInput } from './server.mjs';
import { composableNames, unpackMeta } from 'file://E:/Programing/My%20Books/Markdown%20Book/markdown-fa-book/node_modules/@unhead/shared/dist/index.mjs';

function useHead(input, options = {}) {
  const head = options.head || injectHead();
  if (head) {
    if (!head.ssr)
      return clientUseHead(head, input, options);
    return head.push(input, options);
  }
}
function clientUseHead(head, input, options = {}) {
  const deactivated = ref(false);
  const resolvedInput = ref({});
  watchEffect(() => {
    resolvedInput.value = deactivated.value ? {} : resolveUnrefHeadInput(input);
  });
  const entry = head.push(resolvedInput.value, options);
  watch(resolvedInput, (e) => {
    entry.patch(e);
  });
  getCurrentInstance();
  return entry;
}
const coreComposableNames = [
  "injectHead"
];
({
  "@unhead/vue": [...coreComposableNames, ...composableNames]
});
function useSeoMeta(input, options) {
  const { title, titleTemplate, ...meta } = input;
  return useHead({
    title,
    titleTemplate,
    // @ts-expect-error runtime type
    _flatMeta: meta
  }, {
    ...options,
    transform(t) {
      const meta2 = unpackMeta({ ...t._flatMeta });
      delete t._flatMeta;
      return {
        // @ts-expect-error runtime type
        ...t,
        meta: meta2
      };
    }
  });
}

export { useHead as a, useSeoMeta as u };
//# sourceMappingURL=index-DIUDACRG.mjs.map
