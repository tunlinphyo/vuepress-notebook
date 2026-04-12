# @counter-style

```css
@counter-style reading-list {
  system: cyclic;
  symbols: "📕" "📗" "📘" "📙" "📓" "📒" "📔";
  suffix: "  ";
}

@counter-style tool-list {
  system: cyclic;
  symbols: "⛏️" "🪓" "🧰" "🔩" "⚙️" "⚖️" "🔬" "⚗️" "🔭" "✏️" "✒️" "🔨" "🛠️" "⚒️" "🔧" "🪛" "🪚" "🗜️";
  suffix: "  ";
}
ul[data-reading-list] {
  list-style-type: reading-list;
}
ul[data-tool-list] {
  list-style-type: tool-list;
}
```