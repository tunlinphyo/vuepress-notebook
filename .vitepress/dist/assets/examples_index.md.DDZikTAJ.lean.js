import { _ as _export_sfc, o as openBlock, c as createElementBlock, j as createBaseVNode, a as createTextVNode } from "./chunks/framework.K0_QoDHq.js";
const __pageData = JSON.parse('{"title":"Examples","description":"","frontmatter":{},"headers":[],"relativePath":"examples/index.md","filePath":"examples/index.md"}');
const _sfc_main = { name: "examples/index.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [..._cache[0] || (_cache[0] = [
    createBaseVNode("h1", {
      id: "examples",
      tabindex: "-1"
    }, [
      createTextVNode("Examples "),
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#examples",
        "aria-label": "Permalink to “Examples”"
      }, "​")
    ], -1),
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createBaseVNode("a", { href: "./about-me-card.html" }, "About Me Card")
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("a", { href: "./markdown-examples.html" }, "Markdown Examples")
      ])
    ], -1)
  ])]);
}
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  index as default
};
