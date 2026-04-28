import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"About Me Card","description":"","frontmatter":{},"headers":[],"relativePath":"examples/about-me-card.md","filePath":"examples/about-me-card.md"}');
const _sfc_main = { name: "examples/about-me-card.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ThemedIframe = resolveComponent("ThemedIframe");
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="about-me-card" tabindex="-1">About Me Card <a class="header-anchor" href="#about-me-card" aria-label="Permalink to “About Me Card”">​</a></h1><h2 id="ui-view" tabindex="-1">UI View <a class="header-anchor" href="#ui-view" aria-label="Permalink to “UI View”">​</a></h2>`);
  _push(ssrRenderComponent(_component_ThemedIframe, {
    src: "/ui-view/about-me-card/index.html",
    title: "About me card demo",
    "max-width": "32rem",
    height: "34rem"
  }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/about-me-card.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const aboutMeCard = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  aboutMeCard as default
};
