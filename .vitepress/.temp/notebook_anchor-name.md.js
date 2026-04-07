import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Anchor Name","description":"","frontmatter":{},"headers":[],"relativePath":"notebook/anchor-name.md","filePath":"notebook/anchor-name.md"}');
const _sfc_main = { name: "notebook/anchor-name.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="anchor-name" tabindex="-1">Anchor Name <a class="header-anchor" href="#anchor-name" aria-label="Permalink to “Anchor Name”">​</a></h1></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("notebook/anchor-name.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const anchorName = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  anchorName as default
};
