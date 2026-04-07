import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Fan List","description":"","frontmatter":{},"headers":[],"relativePath":"examples/fan-list.md","filePath":"examples/fan-list.md"}');
const _sfc_main = { name: "examples/fan-list.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ThemedIframe = resolveComponent("ThemedIframe");
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="fan-list" tabindex="-1">Fan List <a class="header-anchor" href="#fan-list" aria-label="Permalink to “Fan List”">​</a></h1><h2 id="ui-view" tabindex="-1">UI View <a class="header-anchor" href="#ui-view" aria-label="Permalink to “UI View”">​</a></h2>`);
  _push(ssrRenderComponent(_component_ThemedIframe, {
    src: "/ui-view/fan-list/index.html",
    title: "Fan List demo",
    "max-width": "32rem",
    height: "34rem"
  }, null, _parent));
  _push(`<h2 id="code-explain" tabindex="-1">Code Explain <a class="header-anchor" href="#code-explain" aria-label="Permalink to “Code Explain”">​</a></h2></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/fan-list.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const fanList = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  fanList as default
};
