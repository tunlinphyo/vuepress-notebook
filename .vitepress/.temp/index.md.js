import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse(`{"title":"","description":"","frontmatter":{"layout":"home","hero":{"name":"Tun's","text":"Cody Draft","tagline":"Modern web platform notes and demos.","actions":[{"theme":"brand","text":"Notebook","link":"/notebook/anchor"},{"theme":"alt","text":"Modules","link":"/polyfills/anchor-card"}]},"features":[{"title":"Timeline Animation","details":"Scroll-driven portfolio layers synced with CSS timelines and marker navigation, with no JavaScript.","link":"/notebook/animation-timeline.html#timeline"},{"title":"Remote Interest","details":"Shows how hovered remote controls can trigger a matching popover through interest invokers.","link":"/notebook/interest-invokers.html#remote-interestfor"},{"title":"Fancy Slide","details":"Combines native scroll buttons, linked targets, and scroll-state layout changes so the active slide expands into focus.","link":"/notebook/scroll-button.html#fancy-slide"},{"title":"Mini Calendar","details":"Keeps in-page navigation synced to the active section while layout positions events from data attributes.","link":"/notebook/scroll-target-group.html#mini-calendar"}]},"headers":[],"relativePath":"index.md","filePath":"index.md"}`);
const _sfc_main = { name: "index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
