import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Fancy Nav","description":"","frontmatter":{},"headers":[],"relativePath":"examples/fancy-nav.md","filePath":"examples/fancy-nav.md"}');
const _sfc_main = { name: "examples/fancy-nav.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ThemedIframe = resolveComponent("ThemedIframe");
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="fancy-nav" tabindex="-1">Fancy Nav <a class="header-anchor" href="#fancy-nav" aria-label="Permalink to “Fancy Nav”">​</a></h1><h2 id="ui-view" tabindex="-1">UI View <a class="header-anchor" href="#ui-view" aria-label="Permalink to “UI View”">​</a></h2>`);
  _push(ssrRenderComponent(_component_ThemedIframe, {
    src: "/ui-view/fancy-nav/index.html",
    title: "Fan List demo",
    "max-width": "40rem",
    height: "24rem"
  }, null, _parent));
  _push(`<h2 id="code-explain" tabindex="-1">Code Explain <a class="header-anchor" href="#code-explain" aria-label="Permalink to “Code Explain”">​</a></h2></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/fancy-nav.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const fancyNav = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  fancyNav as default
};
