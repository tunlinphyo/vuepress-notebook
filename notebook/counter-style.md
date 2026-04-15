# @counter-style

----

<baseline-status featureId="counter-style"></baseline-status>

<ThemedIframe
  src="/notebook-view/counter-style.html"
  title="Fan List demo"
  max-width="20rem"
  height="24rem"
/>

```css
@counter-style reading-list {
  system: cyclic;
  symbols: "📕" "📗" "📘" "📙" "📓" "📒" "📔";
  suffix: "  ";
}

@counter-style tool-list {
  system: cyclic;
  symbols: "⛏️" "🪓" "🧰" "🔩" "⚙️" "⚖️" "🔬" "⚗️" "🔭" "✏️" "✒️" "⚒️" "🔧" "🪛" "🪚" "🗜️";
  suffix: "  ";
}
ul[data-reading-list] {
  list-style-type: reading-list;
}
ul[data-tool-list] {
  list-style-type: tool-list;
}
```