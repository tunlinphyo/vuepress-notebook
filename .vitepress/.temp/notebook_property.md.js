import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"@property","description":"","frontmatter":{},"headers":[],"relativePath":"notebook/property.md","filePath":"notebook/property.md"}');
const _sfc_main = { name: "notebook/property.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="property" tabindex="-1">@property <a class="header-anchor" href="#property" aria-label="Permalink to “@property”">​</a></h1><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark" style="${ssrRenderStyle({ "--shiki-light": "#24292e", "--shiki-dark": "#e1e4e8", "--shiki-light-bg": "#fff", "--shiki-dark-bg": "#24292e" })}" tabindex="0" dir="ltr"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">@property</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"> --rotation {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">  syntax: &quot;&lt;angle</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">&gt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&quot;;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">  inherits: false;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">  initial-value</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">: 45deg;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">}</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="${ssrRenderStyle({ "--shiki-light": "#24292e", "--shiki-dark": "#e1e4e8", "--shiki-light-bg": "#fff", "--shiki-dark-bg": "#24292e" })}" tabindex="0" dir="ltr"><code><span class="line"><span>/* A data type name */</span></span>
<span class="line"><span>syntax: &quot;&lt;color&gt;&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/* A &#39;|&#39; combinator for multiple data types */</span></span>
<span class="line"><span>syntax: &quot;&lt;length&gt; | &lt;percentage&gt;&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/* Space-separated list of values */</span></span>
<span class="line"><span>syntax: &quot;&lt;color&gt;+&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/* Comma-separated list of values */</span></span>
<span class="line"><span>syntax: &quot;&lt;length&gt;#&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/* Keywords */</span></span>
<span class="line"><span>syntax: &quot;small | medium | large&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/* Combination of data type and keyword */</span></span>
<span class="line"><span>syntax: &quot;&lt;length&gt; | auto&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/* Universal syntax value */</span></span>
<span class="line"><span>syntax: &quot;*&quot;;</span></span></code></pre></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("notebook/property.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const property = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  property as default
};
