import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Anchor Flip","description":"","frontmatter":{},"headers":[],"relativePath":"examples/anchor-flip.md","filePath":"examples/anchor-flip.md"}');
const _sfc_main = { name: "examples/anchor-flip.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ThemedIframe = resolveComponent("ThemedIframe");
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="anchor-flip" tabindex="-1">Anchor Flip <a class="header-anchor" href="#anchor-flip" aria-label="Permalink to “Anchor Flip”">​</a></h1><h2 id="ui-view" tabindex="-1">UI View <a class="header-anchor" href="#ui-view" aria-label="Permalink to “UI View”">​</a></h2>`);
  _push(ssrRenderComponent(_component_ThemedIframe, {
    src: "/ui-view/anchor-flip/index.html",
    title: "About me card demo",
    "max-width": "38rem",
    height: "24rem"
  }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/anchor-flip.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const anchorFlip = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  anchorFlip as default
};
