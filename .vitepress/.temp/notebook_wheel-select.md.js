import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Wheel Select","description":"","frontmatter":{},"headers":[],"relativePath":"notebook/wheel-select.md","filePath":"notebook/wheel-select.md"}');
const _sfc_main = { name: "notebook/wheel-select.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ThemedIframe = resolveComponent("ThemedIframe");
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="wheel-select" tabindex="-1">Wheel Select <a class="header-anchor" href="#wheel-select" aria-label="Permalink to “Wheel Select”">​</a></h1><h2 id="ui-view" tabindex="-1">UI View <a class="header-anchor" href="#ui-view" aria-label="Permalink to “UI View”">​</a></h2>`);
  _push(ssrRenderComponent(_component_ThemedIframe, {
    src: "/notebook/wheel-select/index.html",
    title: "UI View",
    "max-width": "40rem",
    height: "24rem"
  }, null, _parent));
  _push(`<h2 id="code-explain" tabindex="-1">Code Explain <a class="header-anchor" href="#code-explain" aria-label="Permalink to “Code Explain”">​</a></h2></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("notebook/wheel-select.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const wheelSelect = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  wheelSelect as default
};
