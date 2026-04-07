import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
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
  _push(`<h2 id="code-explain" tabindex="-1">Code Explain <a class="header-anchor" href="#code-explain" aria-label="Permalink to “Code Explain”">​</a></h2><p>You can now build this UI with plain files instead of Vue.</p><ul><li>Write HTML in <code>public/ui-view/about-me-card/index.html</code></li><li>Write CSS in <code>public/ui-view/about-me-card/style.css</code></li><li>Write JS in <code>public/ui-view/about-me-card/script.js</code></li><li>Show it in markdown with an iframe like <code>src=&quot;/ui-view/about-me-card/&quot;</code></li></ul><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark" style="${ssrRenderStyle({ "--shiki-light": "#24292e", "--shiki-dark": "#e1e4e8", "--shiki-light-bg": "#fff", "--shiki-dark-bg": "#24292e" })}" tabindex="0" dir="ltr"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">iframe</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}">  src</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}">&quot;/ui-view/about-me-card/&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}">  title</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}">&quot;About me card demo&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}">  style</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}">&quot;width:100%;max-width:420px;height:430px;border:0;&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">iframe</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span></code></pre></div></div>`);
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
