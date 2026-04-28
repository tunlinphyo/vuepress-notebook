import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Color Picker","description":"","frontmatter":{},"headers":[],"relativePath":"examples/color-picker.md","filePath":"examples/color-picker.md"}');
const _sfc_main = { name: "examples/color-picker.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ThemedIframe = resolveComponent("ThemedIframe");
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="color-picker" tabindex="-1">Color Picker <a class="header-anchor" href="#color-picker" aria-label="Permalink to “Color Picker”">​</a></h1><h2 id="ui-view" tabindex="-1">UI View <a class="header-anchor" href="#ui-view" aria-label="Permalink to “UI View”">​</a></h2>`);
  _push(ssrRenderComponent(_component_ThemedIframe, {
    src: "/ui-view/color-picker/index.html",
    title: "Color picker demo",
    "max-width": "32rem",
    height: "34rem"
  }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/color-picker.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const colorPicker = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  colorPicker as default
};
